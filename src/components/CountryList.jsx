import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesProvider";

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add you first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((arr, city) => {
    if (arr.map((ele) => ele.country).includes(city.country)) return arr;
    else
      return [
        ...arr,
        {
          country: city.country,
          emoji: city.emoji,
          countryCode: city.countryCode,
        },
      ];
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

export default CountryList;
