import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import './Header.css';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    const toggleDropdown = () => {
        setDropdownOpen(prevState => !prevState);
    };

    return (
        <div className="header">
            <div className="header-line">
                <button className='header-back' onClick={handleBackClick}>
                    <IoMdArrowRoundBack />
                </button>
                <h2 className='header-text'>
                    <Link to="/home" className="header-link">BrewBooze</Link>
                </h2>
                <div className="menu-container">
                    <button className="menu-button" onClick={toggleDropdown}>
                        <IoMenu className="menu-icon" />
                    </button>
                    <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                        <Link to="/" className="dropdown-item">Welcome Page</Link>
                        <Link to="/about" className="dropdown-item">About</Link>
                        <Link to="/credits" className="dropdown-item">Credits</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
