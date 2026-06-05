// =====================================
// Auth Middleware
//
// Fungsi:
// - Verifikasi JWT
// - Mengamankan Route
// - Menyimpan userId ke Request
// =====================================

import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

// =====================================
// JWT Payload Type
// =====================================

type JwtPayload = {
  userId: string;
};

// =====================================
// Custom Request
//
// Menambahkan userId ke Request
// setelah token berhasil diverifikasi
// =====================================

export interface AuthRequest
  extends Request {
  userId?: string;
}

// =====================================
// Verify JWT Middleware
// =====================================

export function authMiddleware(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const authHeader =
      req.headers.authorization;

    // =====================================
    // Cek Authorization Header
    // =====================================

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message:
          "Authorization header required",
      });
    }

    // =====================================
    // Format:
    // Bearer TOKEN
    // =====================================

    const token =
      authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token required",
      });
    }

    // =====================================
    // Verify Token
    // =====================================

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;

    // =====================================
    // Simpan userId ke Request
    // =====================================

    req.userId = decoded.userId;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}