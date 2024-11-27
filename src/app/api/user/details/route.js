// /pages/api/user/details.js
import dbConnect from "@/lib/db";
import User from "@/models/User"; // Assuming you have a User model

dbConnect();

export async function GET(req, res) {
  try {
    const userId = req.user.id; // This should be set from a JWT or session, replace with your logic.
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    
    // Returning only the necessary fields
    return res.status(200).json({
      userName: user.userName,
      profileImage: user.profileImage || "/images/default-profile.jpg", // Default image if not set
      phoneNumber: user.phoneNumber,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
