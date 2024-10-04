import React, { useState } from 'react';
import Header from '../components/Header';
import './Simulator.css';

import Grinder from '../3DModels/Grinder';
import CoffeeGrounds from '../3DModels/CoffeeGrounds';
import Flavor3D from '../3DModels/ModelFlavor'; 
import Water from '../3DModels/Water';

const Flavor = () => {
    const models = [Grinder, CoffeeGrounds, Water, Flavor3D];
    const descriptions = [
        '1. Grind the Flavor coffee beans to turn it into grounds.',
        '2. Put the ground coffee in a cup. At least 2 tablespoons will do.',
        '3. Mix the the coffee grounds with water. Two tablespoons of grounds = 175ml of water.',
        '4. The Flavor coffee is ready to serve.'
    ];
    const [currentModelIndex, setCurrentModelIndex] = useState(0); 

    const handleNext = () => {
        setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
    };

    const handlePrevious = () => {
        setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
    };
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
                        <h1>Flavor</h1>
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
                        <button onClick={handlePrevious} className="simu-button">
                            Previous
                        </button>
                        <button onClick={handleNext} className="simu-button">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Flavor;
