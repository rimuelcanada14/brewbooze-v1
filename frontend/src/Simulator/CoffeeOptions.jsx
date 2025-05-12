import React from 'react';
import Header from '../components/Header';
import './Simulator.css';
import { useNavigate } from 'react-router-dom';

const coffeeOptions = () => {
    const navigate = useNavigate();
    return (
        <div className='coffee-page'>
            <div>
                <Header />
            </div>

            <div className="bev">
                <div className='coffee-container'>
                    <div className='coffee-opts'>
                        <div className='coffee-button'>
                            <button className = 'coffee-option' onClick={() => navigate('/arabica')}>
                                <div>
                                    <img src='./Arabica.png' alt='Flavor' className='coffee-ara' />
                                </div>
                                <h2 className = 'coffee-text'>ARABICA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>ROBUSTA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>LIBERICA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>EXCELSA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text-a'>FRENCH<br/>VANILLA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>HAZELNUT</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>CARAMEL</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text-a'>PUMPKIN<br/>SPICE</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>PEPPERMINT</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>MOCHA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>ARABICA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>ROBUSTA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>LIBERICA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text'>EXCELSA</h2>
                            </button>
                        </div>
                        <div className='coffee-button'>
                            <button className = 'coffee-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image-opt' />
                                </div>
                                <h2 className = 'coffee-text-a'>FRENCH<br/>VANILLA</h2>
                            </button>
                        </div>
                    </div>
                    {/* Repeat for other options */}
                </div>
            </div>
        </div>
    );
};
export default coffeeOptions;
