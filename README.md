<img width="1920" height="867" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/c92a26e2-ccb1-4206-b5a9-c069c3928fe9" /># 🌍 WorldWise — Travel Places & Notes

**WorldWise** is a lightweight React app for saving visited cities/countries and adding notes about each visit with LogIn/LogOut feature. It’s built with React and uses a simple JSON dataset for data. The app supports both local development via `json-server` and production deployment on Vercel using `serverless API routes`.

---

## 🔗 Live demo
[➡️ Click here to view live demo](https://world-wise-ten-amber.vercel.app/)

---

## ✨ Features
- Save visited cities & countries
- Add notes and visit details
- View and edit city details
- Persistent data for local dev via `json-server`
- Vercel serverless API routes for production (no external server required)

---

## ⚙️ Tech stack
- React (Vite)
- JavaScript (ES6+)
- CSS modules
- json-server (local fake API)
- Vercel serverless functions (production API)
- Leaflet (for maps)

---

## 📸 Screenshots
<img width="1920" height="863" alt="Screenshot (95)" src="https://github.com/user-attachments/assets/1b759487-2ea3-4a3a-9e09-637be0a4ffbd" />
<img width="1920" height="854" alt="Screenshot (97)" src="https://github.com/user-attachments/assets/49933c3f-4e3c-4a24-8a8b-04095ac15bfe" />
<img width="1920" height="860" alt="Screenshot (98)" src="https://github.com/user-attachments/assets/db6608f2-d755-498d-ab1e-e5762b873793" />
<img width="1920" height="860" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/82f76e80-d17e-4088-a2e7-8698302f834e" />
<img width="1920" height="863" alt="Screenshot (94)" src="https://github.com/user-attachments/assets/d0aa4cbd-52a8-47e8-9993-a562f4f3685e" />
<img width="1920" height="859" alt="Screenshot (91)" src="https://github.com/user-attachments/assets/5e80123c-cfb1-4092-9282-fafe9f04b7c3" />
<img width="1920" height="856" alt="Screenshot (92)" src="https://github.com/user-attachments/assets/755bd4e0-f48b-4703-bc49-7807b624b8fc" />
<img width="1920" height="867" alt="Screenshot (93)" src="https://github.com/user-attachments/assets/0fe0ec4e-1b3a-4e9d-9feb-9554a135a2fe" />

---

## 🏃‍➡️ How it works
- During development: the app fetches data from `http://localhost:8000` (run via `npm run server` which uses `json-server`).
- In production: the app fetches from `/api` endpoints (served by Vercel serverless functions that read `data/cities.json`).
- This is controlled automatically by `src/Contexts/CitiesProvider.jsx`:
```js
const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000";
```
- Deploy to Vercel (serverless API)
- Add the api/ folder (with api/cities.js and api/cities/[id].js) to the project root. These files return data from data/cities.json.
- Vercel will publish your frontend and serverless endpoints automatically:
-- https://<site-url>.vercel.app/api/cities
-- https://<site-url>.vercel.app/api/cities/<id>

---

## 📂 Project structure (relevant)
- src/Contexts/CitiesProvider.jsx — main data fetching & reducer logic
- data/cities.json — dataset served by json-server or serverless API
- api/ — add these serverless routes for Vercel (/api/cities, /api/cities/<id>)

---

Happy travels — made by **Prateek**
