import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // تحميل المتغيرات من .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// نقطة البداية
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// تشغيل السيرفر
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
