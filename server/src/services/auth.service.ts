// =====================================
// Auth Service
//
// Fungsi:
// - Business Logic Auth
// - Register
// - Login
// - JWT
// =====================================

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authRepository from "../repositories/auth.repository.js";

export class AuthService {
  // =====================================
  // Generate JWT Token
  // =====================================

  generateToken(userId: string) {
    return jwt.sign(
      {
        userId,
      },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "7d",
      }
    );
  }

  // =====================================
  // Register User
  // =====================================

  async register(data: {
    fullName: string;
    email: string;
    password: string;
    role: "USER" | "TENANT";
  }) {
    const existingUser =
      await authRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new Error(
        "Email already registered"
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10
      );

    const user =
      await authRepository.createUser({
        ...data,
        password: hashedPassword,
      });

    const token =
      this.generateToken(user.id);

    const {
      password,
      ...safeUser
    } = user;

    return {
      user: safeUser,
      token,
    };
  }

  // =====================================
  // Login User
  // =====================================

  async login(
    email: string,
    password: string
  ) {
    const user =
      await authRepository.findByEmail(
        email
      );

    // User tidak ditemukan
    if (!user || !user.password) {
      throw new Error(
        "Account not found"
      );
    }

    const isPasswordMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    // Password salah
    if (!isPasswordMatch) {
      throw new Error(
        "Incorrect password"
      );
    }

    const token =
      this.generateToken(user.id);

    const {
      password: _password,
      ...safeUser
    } = user;

    return {
      user: safeUser,
      token,
    };
  }

  // =====================================
  // Current User
  // =====================================

  async getCurrentUser(
    userId: string
  ) {
    const user =
      await authRepository.findById(
        userId
      );

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    const {
      password,
      ...safeUser
    } = user;

    return safeUser;
  }
}

export default new AuthService();