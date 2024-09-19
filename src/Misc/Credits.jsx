import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Misc.css'

const Credits = () => {
    return (
        <>
        <div className='misc-page'>
            <div>
                <Header />
            </div>

            <div className="misc-container">
                <div className = 'credit-title'>
                    <h1>CREDITS</h1>
                </div>
                <div className="credit-pics">
                    <div className="credit-pics-l">
                        <a href="https://dailygrind.ph/list-of-coffee-flavors-to-try/" target="_blank" rel="noopener noreferrer">
                            <img src='./DGC.png' alt='DGC Coffee' className='dgc-image' />
                        </a>
                        <a href="https://www.klook.com/en-PH/blog/pinoy-cocktail-gin-bilog/" target="_blank" rel="noopener noreferrer">
                            <img src='./Klook.png' alt='Klook Coffee' className='klook-image' />
                        </a>
                        <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer">
                            <img src='./Blender.png' alt='Blender Coffee' className='blender-image' />
                        </a>
                    </div>
                    <div className="credit-pics-r">
                        <a href="https://www.statista.com/statistics/578717/inflation-rate-in-philippines/" target="_blank" rel="noopener noreferrer">
                            <img src='./Statista.png' alt='Statista Coffee' className='klook-image' />
                        </a>
                        <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">
                            <img src='./GPT.png' alt='GPT Coffee' className='klook-image' />
                        </a>
                        <a href="https://www.beanandbarley.com.ph/post/how-much-does-it-cost-to-start-a-coffee-business-in-the-philippines" target="_blank" rel="noopener noreferrer">
                            <img src='./BnB.png' alt='BnB Coffee' className='blender-image' />
                        </a>
                    </div> 
                </div>
            </div>
        </div>
        <Footer/>
    
    </>
    );
};

export default Credits;