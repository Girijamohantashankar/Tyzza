import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "../../../styles/Header.css";

function Header() {
    return (
        <div className="header_container">
            <div className="header_left">
                <h1 className="header_title">Tyzza</h1>
            </div>

            <div className="header_right">
                <NotificationsIcon className="header_icon" />
                <AccountCircleIcon className="header_icon" />
            </div>
        </div>
    );
}

export default Header;
