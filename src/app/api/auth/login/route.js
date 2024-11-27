import dbConnect from "@/lib/db";
import User from "@/models/User"; // Assuming you have a User model already
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Connect to the database
dbConnect();

export async function POST(req) {
  try {
    const { mobile, password } = await req.json();

    // Validate input
    if (!mobile || !password) {
      return NextResponse.json(
        { error: "Mobile and password are required" },
        { status: 400 }
      );
    }

    // Check if the user exists
    const user = await User.findOne({ mobile });
    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 400 }
      );
    }

    // Compare password with hashed password stored in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid password" },
        { status: 400 }
      );
    }

    // If login is successful
    return NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in login route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
