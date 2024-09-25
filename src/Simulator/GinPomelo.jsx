import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Simulator.css';

import Basil from '../3DModels/Basil';
import GinPomelo3D from '../3DModels/GinPomelo'; // Renaming to avoid conflict with component name
import IceFalling from '../3DModels/IceFalling';
import PomeloFall from '../3DModels/PomeloFall';
import Shake from '../3DModels/Shake';

const GinPomelo = () => {
    // Array to store the sequence of models
    const models = [IceFalling, PomeloFall, Basil, Shake, GinPomelo3D];

    const [currentModelIndex, setCurrentModelIndex] = useState(0); // Initial state to show the first model

    const handleNext = () => {
        // Increment index to show the next model
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    };

    const handlePrevious = () => {
        // Decrement index to show the previous model
        setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
    };

    // Dynamically render the current model based on the index
    const CurrentModel = models[currentModelIndex];

    return (
        <>
            <div className='simu-page'>
                <div>
                    <Header />
                </div>

                <div className="simu-container">
                    <div className='simu-title'>
                        <h1>GIN POMELO</h1>
                    </div>

                    {/* Render the current 3D model */}
                    <CurrentModel />

                    <div className="simu-buttons">
                        {/* Previous button to switch to the previous model */}
                        <button onClick={handlePrevious} className="simu-button">
                            Previous
                        </button>

                        {/* Next button to switch to the next model */}
                        <button onClick={handleNext} className="simu-button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GinPomelo;
