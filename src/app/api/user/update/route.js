// /pages/api/user/update.js
import dbConnect from "@/lib/db";
import User from "@/models/User"; // Assuming you have a User model

dbConnect();

export async function PUT(req, res) {
  try {
    const { userName, profileImage, phoneNumber } = req.body;
    
    if (!userName || !profileImage || !phoneNumber) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userId = req.user.id; // Replace with actual user authentication logic
    
    const user = await User.findByIdAndUpdate(
      userId,
      { userName, profileImage, phoneNumber },
      { new: true } // Return the updated user
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating user profile:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
