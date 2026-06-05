// =====================================
// Server Entry Point
//
// Fungsi:
// - Load environment variables
// - Menjalankan express app
// =====================================

import dotenv from "dotenv";

import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(
    `🚀 Server running on port ${PORT}`
  );
});