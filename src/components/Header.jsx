import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-line">
                <h5 className='header-text'>
                    <Link to="/home" className="header-link">BREWBOOZE</Link>
                </h5>
            </div>
        </div>
    );
};

export default Header;
