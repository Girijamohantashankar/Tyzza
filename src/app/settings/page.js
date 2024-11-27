"use client";
import React, { useState, useEffect } from "react";
import "../../../styles/settings.css";
import Header from "../Header/page";
import Footer from "../Footer/page";
import { toast } from "react-toastify"; // For notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function Settings() {
    const [isEditing, setIsEditing] = useState(false);
    const [userDetails, setUserDetails] = useState({
        profileImage: "/images/default-profile.jpg", // Default profile image
        userName: "",
        phoneNumber: "",
    });

    const [previewImage, setPreviewImage] = useState(userDetails.profileImage);

    // Fetch user details from the backend on component mount
    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch("/api/user/details");
                const data = await response.json();
                if (response.ok) {
                    setUserDetails(data);
                    setPreviewImage(data.profileImage);
                } else {
                    toast.error(data.error || "Failed to load user details.");
                }
            } catch (error) {
                console.error("Error fetching user details:", error);
                toast.error("An error occurred while fetching user details.");
            }
        };
        fetchUserDetails();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl); // Update preview
        }
    };

    const handleSave = async () => {
        const updatedDetails = {
            ...userDetails,
            profileImage: previewImage, // Save the uploaded image
        };

        // Send updated data to the backend
        const response = await fetch("/api/user/update", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedDetails),
        });

        const data = await response.json();

        if (response.ok) {
            toast.success("Profile updated successfully!");
        } else {
            toast.error(data.error || "Failed to update profile.");
        }

        setIsEditing(false);
    };

    const handleCancel = () => {
        setPreviewImage(userDetails.profileImage); // Revert preview to original image
        setIsEditing(false);
    };

    return (
        <>
            <Header />
            <div className="settings-page">
                <div className="settings-card">
                    {/* Profile Image */}
                    <div className="profile-section">
                        <img
                            src={previewImage}
                            alt="Profile"
                            className="profile-image"
                        />
                        {isEditing && (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="upload-input"
                                />
                            </div>
                        )}
                    </div>

                    {/* User Name */}
                    <div className="detail-section">
                        <label>Username:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="userName"
                                value={userDetails.userName}
                                onChange={handleInputChange}
                                className="detail-input"
                            />
                        ) : (
                            <p>{userDetails.userName}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div className="detail-section">
                        <label>Phone Number:</label>
                        <p>{userDetails.phoneNumber}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        {isEditing ? (
                            <>
                                <button className="save-button" onClick={handleSave}>
                                    Save
                                </button>
                                <button className="cancel-button" onClick={handleCancel}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <button
                                className="edit-button"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Settings;
