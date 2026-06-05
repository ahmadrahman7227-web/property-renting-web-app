// =====================================
// Auth Repository
//
// Fungsi:
// - Query tabel User
// - Digunakan oleh Auth Service
// =====================================

import prisma from "../config/prisma.js";

export class AuthRepository {
  // =====================================
  // Cari user berdasarkan email
  // =====================================

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  // =====================================
  // Cari user berdasarkan ID
  // =====================================

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  // =====================================
  // Membuat user baru
  // =====================================

  async createUser(data: {
    fullName: string;
    email: string;
    password: string;
    role: "USER" | "TENANT";
  }) {
    return prisma.user.create({
      data,
    });
  }

  // =====================================
  // Ambil Profile User
  // =====================================

  async getProfile(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}

export default new AuthRepository();