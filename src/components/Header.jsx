import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <div className="header-line">
                <h2 className='header-text'>
                    <Link to="/home" className="header-link">BrewBooze</Link>
                </h2>
            </div>
        </div>
    );
};

export default Header;
