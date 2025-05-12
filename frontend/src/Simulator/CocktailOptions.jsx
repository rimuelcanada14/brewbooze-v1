import React from 'react';
import Header from '../components/Header';
import './Simulator.css';
import { useNavigate } from 'react-router-dom';

const CocktailOptions = () => {
    const navigate = useNavigate();
    return (
        <div className='cocktail-page'>
            <div>
                <Header />
            </div>

            <div className="bev">
                <div className='cocktail-container'>
                    <div className='cocktail-opts'>
                        <div className='cocktail-button'>
                            <button className='cocktail-option' onClick={() => navigate('/gin-pomelo')}>
                                <div>
                                    <img src='./GinPomelo.png' alt='Flavor' className='cocktail-gin' />
                                </div>
                                <h2 className='cocktail-text'>GIN POM</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>WENG WENG</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option' onClick={() => navigate('/shembot')}>
                                <div>
                                    <img src='./Shembot.png' alt='Flavor' className='cocktail-rpg' />
                                </div>
                                <h2 className='cocktail-text'>SHEMBOT</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>EXPIRED</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>DESTROSO</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option' onClick={() => navigate('/rpg')}>
                                <div>
                                    <img src='./RPG.png' alt='Flavor' className='cocktail-rpg' />
                                </div>
                                <h2 className='cocktail-text'>RPG</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>KISAY</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>RED ALERT</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option' onClick={() => navigate('/tia-maria')}>
                                <div>
                                    <img src='./TiaMaria.png' alt='Flavor' className='cocktail-rpg' />
                                </div>
                                <h2 className='cocktail-text-a'>TIA MARIA'S<br />ZOMBIE</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>TOMA COLLINS</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>GIN POM 1</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <                   button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>WENG WENG 2</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>GIN TEN 3</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>GIN POM 4</h2>
                            </button>
                        </div>
                        <div className='cocktail-button'>
                            <button className='cocktail-option'>
                                <div>
                                    <img src='./Cocktail.png' alt='Flavor' className='cocktail-image-opt' />
                                </div>
                                <h2 className='cocktail-text'>GIN POM 5</h2>
                            </button>
                        </div>
                    </div>
                    {/* Repeat for other options */}
                </div>
            </div>
        </div>

    );
};
export default CocktailOptions;

