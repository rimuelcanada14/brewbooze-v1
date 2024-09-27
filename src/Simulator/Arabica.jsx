import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css';

import Grinder from '../3DModels/Grinder';
import CoffeeGrounds from '../3DModels/CoffeeGrounds';
import Arabica3D from '../3DModels/ModelArabica'; 
import Water from '../3DModels/Water';

const Arabica = () => {
    // Array to store the sequence of models
    const models = [Grinder, CoffeeGrounds, Water, Arabica3D];

    // Array to store descriptions for each model
    const descriptions = [
        '1. Grind the Arabica coffee beans to turn it into grounds.',
        '2. Put the ground coffee in a cup. At least 2 tablespoons will do.',
        '3. Mix the the coffee grounds with water. Two tablespoons of grounds = 175ml of water.',
        '4. The Arabica coffee is ready to serve.'
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
                        <h1>ARABICA</h1>
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

export default Arabica;
