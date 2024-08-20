import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css'

const Choose = () => {
    return (
        <div className='choose-page'>
            <div>
                <Header />
            </div>

            <div className="choose-container">
                <div className='choose-button'>
                    <button className = 'choose-option'>
                        <div>
                            <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                        </div>
                        <h2 className = 'choose-text'>COFFEE</h2>
                    </button>
                </div>
                <div className='choose-button'>
                    <button className = 'choose-option'>
                        <div>
                            <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                        </div>
                        <h2 className = 'choose-text-c'>COCKTAIL</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Choose;