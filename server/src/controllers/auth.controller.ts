// =====================================
// Auth Controller
//
// Fungsi:
// - Handle Register
// - Handle Login
// - Handle Current User
// =====================================

import { Response } from "express";

import authService from "../services/auth.service.js";
import { AuthRequest } from "../middlewares/auth.middleware.js";

export class AuthController {
  // =====================================
  // Register
  // =====================================

  async register(
    req: AuthRequest,
    res: Response
  ) {
    try {
      const result =
        await authService.register(
          req.body
        );

      return res.status(201).json({
        success: true,
        message:
          "Register success",
        data: result,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Register failed",
      });
    }
  }

  // =====================================
  // Login
  // =====================================

  async login(
    req: AuthRequest,
    res: Response
  ) {
    try {
      const { email, password } =
        req.body;

      const result =
        await authService.login(
          email,
          password
        );

      return res.status(200).json({
        success: true,
        message:
          "Login success",
        data: result,
      });
    } catch (error) {
      return res.status(401).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Login failed",
      });
    }
  }

  // =====================================
  // Current User
  // =====================================

  async me(
    req: AuthRequest,
    res: Response
  ) {
    try {
      const user =
        await authService.getCurrentUser(
          req.userId!
        );

      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "User not found",
      });
    }
  }
}

export default new AuthController();