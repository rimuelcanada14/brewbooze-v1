import React from 'react';
import Header from '../components/Header';
import './Simulator.css'

const CocktailOptions = () => {
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
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>GIN POM</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>WENG WENG</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>SHEMBOT</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>EXPIRED</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>DESTROSO</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>RPG</h2>
                            </button>
                        </div>
                    </div>


                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>KISAY</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c'>RED ALERT</h2>
                            </button>
                        </div>
                    </div>

                    <div className = 'bev-opts'>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c-break'>TIA MARIA'S ZOMBIE</h2>
                            </button>
                        </div>
                        <div className='choose-button'>
                            <button className = 'choose-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image' />
                                </div>
                                <h2 className = 'bev-text-c-break'>TOMA<br/>COLLINS</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CocktailOptions;