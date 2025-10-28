import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Create a new user
export async function POST(request: Request) {
  try {
    const { name, email, age } = await request.json();
    const newUser = await prisma.user.create({
      data: { name, email, age },
    });
    return NextResponse.json({ message: "User created", user: newUser });
  } catch (error: unknown) {
    console.error("Error creating user:", error);
    let message = "An unexpected error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// Get all users
export async function GET() {
  try { 
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error: unknown) {
    console.error("Error fetching users:", error);
    let message = "An unexpected error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
} 

export async function DELETEALL() {
  try {
    const deletedUsers = await prisma.user.deleteMany();  
    return NextResponse.json({ message: "All users deleted", count: deletedUsers.count });
  } catch (error: unknown) {
    console.error("Error deleting users:", error);
    let message = "An unexpected error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
} 

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted", user: deletedUser });
  } catch (error: unknown) {
    console.error("Error deleting user:", error);
    let message = "An unexpected error occurred";
    if (error instanceof Error) {
      message = error.message;
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


export async function PUT(request: Request) {
  try {
    const { id, name, email, age } = await request.json();
    const updatedUser = await prisma.user.update({
      where: { id },
      data: { name, email, age },
    });
    return NextResponse.json({ message: "User updated", user: updatedUser });
  } catch (error: unknown) {
    console.error("Error updating user:", error);
    let message = "An unexpected error occurred";
    if (error instanceof Error) {
      message = error.message;
    } 
    return NextResponse.json({ error: message }, { status: 500 });
  }
}