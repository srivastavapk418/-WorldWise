// api/cities/[id].js
import citiesData from "../../data/cities.json";

export default function handler(req, res) {
  const { id } = req.query; // Vercel provides route param as string
  const cities = Array.isArray(citiesData) ? citiesData : citiesData.cities || [];

  // Accept numeric or string id (match however your city id is stored)
  const city = cities.find((c) => String(c.id) === String(id));

  if (!city) {
    return res.status(404).json({ message: "City not found" });
  }

  res.status(200).json(city);
}
