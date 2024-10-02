import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css';

import Pineapple from '../3DModels/Pineapple';
import Rpg3D from '../3DModels/ModelRPG'; // Renaming to avoid conflict with component name
import RedHorse from '../3DModels/RedHorse';
import IceFall from '../3DModels/IceFalling';
import GinLiq from '../3DModels/GinLiq';
import Shake from '../3DModels/Shake';

const RPG = () => {
    // Array to store the sequence of models
    const models = [RedHorse, Pineapple, GinLiq, Shake, IceFall, Rpg3D];

    // Array to store descriptions for each model
    const descriptions = [
        '1. Red Horse is the R in RPG. At least 35ml will do.',
        '2. Pineapple Juice is the P in RPG. At least 50ml to add that sweet taste.',
        '3. Gin Bilog is the G in RPG. At least 35ml, too.',
        '4. Shake the drink to perfection to evely distribute the flavor.',
        '5. Put some ice to the drink to refresh your spirit.',
        '6. Your RPG drink is ready to serve.'
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
                        <h1>RPG</h1>
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

export default RPG;
