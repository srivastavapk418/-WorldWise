// api/cities/[id].js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const { id } = req.query;

    const filePath = path.join(process.cwd(), "data", "cities.json");
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const jsonData = JSON.parse(fileContents);

    // ✅ Access the array correctly
    const cities = jsonData.cities || [];

    // ✅ Match by ID (convert both sides to string)
    const city = cities.find((c) => String(c.id) === String(id));

    if (!city) {
      console.warn(`City with id=${id} not found`);
      return res.status(404).json({ error: `City with id=${id} not found.` });
    }

    // ✅ Return single city object
    res.status(200).json(city);
  } catch (error) {
    console.error("Error loading city:", error);
    res.status(500).json({ error: "Failed to load city data." });
  }
}
