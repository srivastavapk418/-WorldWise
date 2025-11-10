// api/cities/[id].js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const { id } = req.query;

    const filePath = path.join(process.cwd(), "data", "cities.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const cities = JSON.parse(fileContents);

    const city = cities.find((c) => String(c.id) === String(id));
    if (!city) {
      return res.status(404).json({ error: "City not found." });
    }

    res.status(200).json(city);
  } catch (err) {
    console.error("Error loading city:", err);
    res.status(500).json({ error: "Failed to load city data." });
  }
}
