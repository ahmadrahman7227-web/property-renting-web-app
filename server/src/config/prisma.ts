// =====================================
// Prisma Client
//
// Fungsi:
// - Koneksi database
// - Dipakai seluruh aplikasi
// =====================================

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;