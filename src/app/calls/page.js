"use client";
import React from "react";
import "../../../styles/calls.css";
import { Icon } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import Header from "../Header/page";
import Footer from "../Footer/page";

function Calls() {
    // Sample user data
    const users = [
        {
            id: 1,
            profileImage: "/images/user1.jpg",
            userName: "John Doe",
        },
        {
            id: 2,
            profileImage: "/images/user2.jpg",
            userName: "Jane Smith",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
        {
            id: 3,
            profileImage: "/images/user3.jpg",
            userName: "Alice Johnson",
        },
    ];

    return (
        <>
        <Header />
        <div className="calls-page">
            <div className="calls-list">
                {users.map((user) => (
                    <div className="call-item" key={user.id}>
                        {/* User profile and name */}
                        <div className="user-info">
                            <img
                                src={user.profileImage}
                                alt={user.userName}
                                className="profile-image"
                            />
                            <p className="user-name">{user.userName}</p>
                        </div>

                        {/* Call and video call icons */}
                        <div className="call-actions">
                            <Icon component={CallIcon} className="icon call-icon" />
                            <Icon component={VideoCallIcon} className="icon video-call-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Calls;
