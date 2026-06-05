// =====================================
// Auth Routes
//
// Fungsi:
// - Routing Authentication
// =====================================

import { Router } from "express";

import authController from "../controllers/auth.controller.js";

import {
  authMiddleware,
} from "../middlewares/auth.middleware.js";

const router = Router();

// =====================================
// Register
// POST /api/auth/register
// =====================================

router.post(
  "/register",
  authController.register.bind(
    authController
  )
);

// =====================================
// Login
// POST /api/auth/login
// =====================================

router.post(
  "/login",
  authController.login.bind(
    authController
  )
);

// =====================================
// Current User
// GET /api/auth/me
// =====================================

router.get(
  "/me",
  authMiddleware,
  authController.me.bind(
    authController
  )
);

export default router;