import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

dbConnect();

export async function POST(req) {
    try {
        const { name, mobile, password, confirmPassword } = await req.json();

        if (!name || !mobile || !password || !confirmPassword) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        if (password !== confirmPassword) {
            return NextResponse.json(
                { error: "Passwords do not match" },
                { status: 400 }
            );
        }
        const existingUser = await User.findOne({ mobile });
        if (existingUser) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            mobile,
            password: hashedPassword,
        });
        await user.save();

        return NextResponse.json(
            { message: "User registered successfully!" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error in signup route:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
