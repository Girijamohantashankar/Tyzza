import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide a name"],
        },
        mobile: {
            type: String,
            required: [true, "Please provide a mobile number"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
        },
        profileImage: {
            type: String,
            default: "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=", // default image URL
        }
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
