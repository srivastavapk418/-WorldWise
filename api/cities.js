// api/cities.js
import citiesData from "../data/cities.json";

export default function handler(req, res) {
  // return full list of cities
  // If your JSON shape is `{ "cities": [...] }`, return that array
  const payload = Array.isArray(citiesData) ? citiesData : citiesData.cities || [];
  res.status(200).json(payload);
}
