import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Simulator.css';

import IceFalling from '../3DModels/IceFalling';
import Shake from '../3DModels/Shake';

const Credits = () => {
    const [showIceFalling, setShowIceFalling] = useState(true); // Initial state to show IceFalling

    const handleNext = () => {
        setShowIceFalling(false); // Switch to Shake when "Next" button is clicked
    };

    return (
        <>
            <div className='simu-page'>
                <div>
                    <Header />
                </div>

                <div className="simu-container">
                    <div className='simu-title'>
                        <h1>WENG WENG</h1>
                    </div>

                    {/* Conditionally render IceFalling or Shake */}
                    {showIceFalling ? <IceFalling /> : <Shake />}

                    {/* Next button to switch from IceFalling to Shake */}
                    {showIceFalling && (
                        <button onClick={handleNext} className="simu-button">
                            Next
                        </button>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Credits;
