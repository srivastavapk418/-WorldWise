// api/cities/[id].js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    // Read the JSON file
    const filePath = path.join(process.cwd(), "data", "cities.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    // Handle both possible shapes: [ {...} ] or { "cities": [ {...} ] }
    const cities = Array.isArray(jsonData)
      ? jsonData
      : Array.isArray(jsonData.cities)
      ? jsonData.cities
      : [];

    if (!Array.isArray(cities)) {
      console.error("Invalid JSON format — cities is not an array");
      return res.status(500).json({ error: "Invalid data format." });
    }

    // Find the city by ID (convert both to strings to be safe)
    const city = cities.find((c) => String(c.id) === String(id));

    if (!city) {
      console.warn(`City with id=${id} not found`);
      return res.status(404).json({ error: `City with id=${id} not found.` });
    }

    // Success 🎉
    res.status(200).json(city);
  } catch (err) {
    console.error("Error loading city:", err);
    res.status(500).json({ error: "Failed to load city data." });
  }
}
