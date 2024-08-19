import React, { useRef, useState, useEffect } from 'react';
import Header from '../components/Header'
import './Home.css'

const Welcome = () => {

    return (
        <div className = 'home-page'>
            <div>
                <Header />
            </div>

            <div className = "home-container">
                <div className='home-button'>
                    <button className = 'home-simulate'>Simulate </button>
                    <button className = 'home-flavor'>Recommend </button>
                    <button className = 'home-predict'>Predict</button>
                </div>
            </div>
        </div>
        

    );
};

export default Welcome;
