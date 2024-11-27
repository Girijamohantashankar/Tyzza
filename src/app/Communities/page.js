"use client";
import React, { useState } from "react";
import "../../../styles/Communities.css";
import Header from "../Header/page";
import Footer from "../Footer/page";

function Page() {
    const [activeTab, setActiveTab] = useState("requests");

    const users = [
        { id: 1, name: "John Doe", profilePicture: "/images/john.jpg" },
        { id: 2, name: "Jane Smith", profilePicture: "/images/jane.jpg" },
        { id: 3, name: "Alex Johnson", profilePicture: "/images/alex.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
        { id: 4, name: "Emily Davis", profilePicture: "/images/emily.jpg" },
    ];
    // Mock data for user requests
    const friendRequests = [
        { id: 1, name: "Sophia Brown", profilePicture: "/images/sophia.jpg" },
        { id: 2, name: "Liam Wilson", profilePicture: "/images/liam.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
        { id: 3, name: "Olivia Taylor", profilePicture: "/images/olivia.jpg" },
    ];

    const handleAccept = (id) => {
        console.log(`Friend request from user ${id} accepted.`);
        // Add your logic here to handle accepting requests.
    };

    const handleReject = (id) => {
        console.log(`Friend request from user ${id} rejected.`);
        // Add your logic here to handle rejecting requests.
    };

    return (
        <>
            <Header />
            <div className="communities-page">
                {/* Top Section with Tabs */}
                <div className="tabs">
                    <button
                        className={`tab ${activeTab === "requests" ? "active" : ""}`}
                        onClick={() => setActiveTab("requests")}
                    >
                        Request Friends
                    </button>
                    <button
                        className={`tab ${activeTab === "friends" ? "active" : ""}`}
                        onClick={() => setActiveTab("friends")}
                    >
                        Friends
                    </button>
                </div>

                {/* Content Section */}
                <div className="tab-content">
                    {activeTab === "requests" ? (
                        <div className="requests-section">
                            <h2>Friend Requests</h2>
                            <div className="user-list">
                                {friendRequests.map((user) => (
                                    <div key={user.id} className="user-card">
                                        <img
                                            src={user.profilePicture}
                                            alt={user.name}
                                            className="user-profile-picture"
                                        />
                                        <div className="user-details">
                                            <p className="user-name">{user.name}</p>
                                            <div className="action-buttons">
                                                <button
                                                    className="accept-button"
                                                    onClick={() => handleAccept(user.id)}
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    className="reject-button"
                                                    onClick={() => handleReject(user.id)}
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="friends-section">
                            <h2>All Users</h2>
                            <div className="user-list">
                                {users.map((user) => (
                                    <div key={user.id} className="user-card">
                                        <img
                                            src={user.profilePicture}
                                            alt={user.name}
                                            className="user-profile-picture"
                                        />
                                        <div className="user-details">
                                            <p className="user-name">{user.name}</p>
                                            <button className="send-request-button">
                                                Send Request
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Page;
