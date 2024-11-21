"use client";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import CallIcon from '@mui/icons-material/Call';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import "../../../styles/Footer.css";

function Footer() {
    const [activeTab, setActiveTab] = useState('chats');
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="footer_container">
            <div className="footer_tabs">
                <Link href="/Chat" passHref>
                    <div
                        className={`footer_tab ${activeTab === 'chats' ? 'active' : ''}`}
                        onClick={() => handleTabChange('chats')}
                    >
                        <ChatIcon className={`footer_icon ${activeTab === 'chats' ? 'active' : ''}`} />
                        <Typography className={`footer_title ${activeTab === 'chats' ? 'active' : ''}`}>Chats</Typography>
                    </div>
                </Link>
                <Link href="/communities" passHref>
                    <div
                        className={`footer_tab ${activeTab === 'communities' ? 'active' : ''}`}
                        onClick={() => handleTabChange('communities')}
                    >
                        <GroupIcon className={`footer_icon ${activeTab === 'communities' ? 'active' : ''}`} />
                        <Typography className={`footer_title ${activeTab === 'communities' ? 'active' : ''}`}>Communities</Typography>
                    </div>
                </Link>

                <Link href="/calls" passHref>
                    <div
                        className={`footer_tab ${activeTab === 'calls' ? 'active' : ''}`}
                        onClick={() => handleTabChange('calls')}
                    >
                        <CallIcon className={`footer_icon ${activeTab === 'calls' ? 'active' : ''}`} />
                        <Typography className={`footer_title ${activeTab === 'calls' ? 'active' : ''}`}>Calls</Typography>
                    </div>
                </Link>

                <Link href="/settings" passHref>
                    <div
                        className={`footer_tab ${activeTab === 'settings' ? 'active' : ''}`}
                        onClick={() => handleTabChange('settings')}
                    >
                        <SettingsIcon className={`footer_icon ${activeTab === 'settings' ? 'active' : ''}`} />
                        <Typography className={`footer_title ${activeTab === 'settings' ? 'active' : ''}`}>Settings</Typography>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Footer;
