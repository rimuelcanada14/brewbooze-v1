import React from 'react';
import Header from '../components/Header';
import './Simulator.css'

const CoffeeOptions = () => {
    return (
        <div className='choose-page'>
            <div>
                <Header />
            </div>

            <div className="bev">
                <div className = 'bev-container'>
                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>ARABICA</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>ROBUSTA</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>LIBERICA</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>EXCELSA</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text-break'>FRENCH<br/>VANILLA</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>HAZELNUT</h2>
                            </button>
                        </div>
                    </div>


                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>CARAMEL</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text-break'>PUMPKIN<br/>SPICE</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>PEPPERMINT</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Coffee.png' alt='Flavor' className='coffee-image' />
                                </div>
                                <h2 className = 'bev-text'>MOCHA</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeOptions;