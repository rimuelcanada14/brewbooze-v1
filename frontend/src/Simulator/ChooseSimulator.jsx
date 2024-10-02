import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { useNavigate } from 'react-router-dom';
import './Simulator.css'

const Choose = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className='choose-page'>
            <div>
                <Header />
            </div>

            <div className="choose-container">
                <h1 className = 'choose-title'>CHOOSE YOUR<br/>BEVERAGE</h1>
                <div className="choose-simu">
                    <div className='choose-button'>
                            <button className = 'choose-option' onClick={() => navigate('/coffee-opt')}>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'choose-text'>COFFEE</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option' onClick={() => navigate('/cocktail-opt')}>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'choose-text-c'>COCKTAIL</h2>
                            </button>
                        </div>
                    </div>       
            </div>
        </div>
        <Footer />
    
    </>
    );
};

export default Choose;