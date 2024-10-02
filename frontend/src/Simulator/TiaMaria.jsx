import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css';

import GinLiq from '../3DModels/GinLiq';
import Sprite from '../3DModels/Sprite';
import StrawberryJuice from '../3DModels/StrawberryJuice'; 
import Water from '../3DModels/Water';
import IceFall from '../3DModels/IceFalling';
import ModelTiaMaria from '../3DModels/ModelTiaMaria';
import Shake from '../3DModels/Shake'

const TiaMaria = () => {
    // Array to store the sequence of models
    const models = [GinLiq, Sprite, StrawberryJuice, Water, Shake, IceFall, ModelTiaMaria];

    // Array to store descriptions for each model
    const descriptions = [
        '1. Put at least 60ml of Gin Bilog to your cup.',
        '2. Add 60ml of Sprite to add sweetness and spirit.',
        '3. Also add 60ml of strawberry juice to add a fruity flavor.',
        '4. You can add water to adjust the flavor and strength of the drink.',
        '5. Shake the mixture well to distribute the flavor.',
        '6. Add ice to make your drink cold and fresh.',
        "7. Drink your Tia Maria's Zombie and taste its Jamaican flavor!"
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
                        <h1>TIA MARIA'S ZOMBIE</h1>
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

export default TiaMaria;
