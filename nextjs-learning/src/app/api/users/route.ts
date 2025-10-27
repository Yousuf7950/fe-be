import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// ✅ GET all users
export async function GET() {
  try {
    // 👇 Temporary fix: create user if collection doesn't exist
    await prisma.user.create({
      data: { name: "Test User123", email: "test@example.com" },
    });

    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

