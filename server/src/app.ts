// =====================================
// Express App Configuration
//
// Fungsi:
// - Setup express
// - Setup middleware global
// - Setup routes
// =====================================

import express from "express";
import cors from "cors";

import prisma from "./config/prisma.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

// =====================================
// Global Middleware
// =====================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =====================================
// Routes
// =====================================

app.use(
  "/api/auth",
  authRoutes
);

// =====================================
// Database Test
// =====================================

app.get("/db-test", async (_req, res) => {
  try {
    await prisma.$connect();

    res.json({
      success: true,
      message: "Database Connected",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database Connection Failed",
      error,
    });
  }
});

// =====================================
// Health Check
// =====================================

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "AurAzure API Running",
  });
});

export default app;