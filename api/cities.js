// api/cities.js
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    // Create absolute path to your data file
    const filePath = path.join(process.cwd(), "data", "cities.json");

    // Read and parse file contents
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const cities = JSON.parse(fileContents);

    // Return data
    res.status(200).json(cities);
  } catch (err) {
    console.error("Error loading cities:", err);
    res.status(500).json({ error: "Failed to load cities data." });
  }
}
