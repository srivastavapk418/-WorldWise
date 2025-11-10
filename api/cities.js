// api/cities.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "data", "cities.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    // Your cities are stored inside jsonData.cities
    const cities = jsonData.cities || [];

    res.status(200).json(cities);
  } catch (error) {
    console.error("Error reading cities.json:", error);
    res.status(500).json({ error: "Failed to load cities data." });
  }
}
