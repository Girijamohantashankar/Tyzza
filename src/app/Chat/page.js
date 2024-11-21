import React from "react";
import "../../../styles/chat.css";
import Image from "next/image";
import Header from "../Header/page";
import Footer from "../Footer/page";

const ChatPage = () => {
  const chatData = [
    {
      name: "Anna Bella",
      message: "Thank you so much",
      time: "1:54 PM",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "Marc Stegen",
      message: "What's going on...",
      time: "3:08 PM",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "The Kop Fans",
      message: "🎉 Image",
      time: "2:45 PM",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "Philipe Louis",
      message: "Did you see that?",
      time: "11:30 AM",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "Zhen Zou",
      message: "What's going o...",
      time: "10:00 AM",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "Ji Sung",
      message: "I'm working from h...",
      time: "Yesterday",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
    {
      name: "Aguilera",
      message: "Let's catch up lat...",
      time: "Yesterday",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s",
    },
  ];

  return (
    <>
     <Header />
    <div className="chat-container">
      <h1 className="chat-title">Chats</h1>
      <ul className="chat-list">
        {chatData.map((chat, index) => (
          <li className="chat-item" key={index}>
            <Image
              src={chat.avatar}
              alt={`${chat.name}'s avatar`}
              width={50}
              height={50}
              className="chat-avatar"
            />
            <div className="chat-info">
              <h2 className="chat-name">{chat.name}</h2>
              <p className="chat-message">{chat.message}</p>
            </div>
            <span className="chat-time">{chat.time}</span>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
};

export default ChatPage;
