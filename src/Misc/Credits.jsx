import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './Misc.css'

const Credits = () => {
    const navigate = useNavigate();

    return (
        <>
        <div className='credit-page'>
            <div>
                <Header />
            </div>

            <div className="credit-container">
                <div className = 'credit-title'>
                    <h1>CREDITS</h1>
                </div>
                <div className="credit-pics">
                    <div className="credit-pics-l">
                        <img src='./DGC.png' alt='Coffee' className='dgc-image' />
                        <img src='./Klook.png' alt='Coffee' className='klook-image' />
                        <img src='./Blender.png' alt='Coffee' className='blender-image' />
                    </div>
                    <div className="credit-pics-r">
                        <img src='./Statista.png' alt='Coffee' className='klook-image' />
                        <img src='./GPT.png' alt='Coffee' className='klook-image' />
                        <img src='./BnB.png' alt='Coffee' className='blender-image' />
                    </div> 
                </div>
            </div>
        </div>
        <Footer/>
    
    </>
    );
};

export default Credits;