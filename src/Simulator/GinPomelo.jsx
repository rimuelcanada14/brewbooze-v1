import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css';

import Basil from '../3DModels/Basil';
import GinPomelo3D from '../3DModels/ModelGinPom'; // Renaming to avoid conflict with component name
import IceFalling from '../3DModels/IceFalling';
import PomeloFall from '../3DModels/PomeloFall';
import GinLiq from '../3DModels/GinLiq';
import Shake from '../3DModels/Shake';

const GinPomelo = () => {
    // Array to store the sequence of models
    const models = [PomeloFall, Basil, GinLiq, Shake, IceFalling, GinPomelo3D];

    // Array to store descriptions for each model
    const descriptions = [
        '1. Put fresh pomelo slices to add the natural flavor.',
        '2. Putting basil leaves is optional; adds a strong flavor to the drink.',
        '3. Gin Pomelo is not called by its name without Gin Bilog. At least 30ml will do. Your choice.',
        '4. Shake the drink to perfection to evely distribute the flavor.',
        '5. Put some ice to the drink to refresh your spirit.',
        '6. The Gin Pomelo drink ready to serve.'
    ];

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
    const currentDescription = descriptions[currentModelIndex];

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

                    <div className="simu-3d">
                        <div className='simu-des'>
                            <h1 className = 'simu-step'>STEPS TO FOLLOW:</h1>
                            {currentDescription}
                        </div>
                        <div className = "simu-model">
                            <CurrentModel />
                        </div>
                        
                    </div>
                   
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
