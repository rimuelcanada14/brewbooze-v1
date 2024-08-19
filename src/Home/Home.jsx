import React, { useState } from 'react';
import Header from '../components/Header';
import './Home.css';

const Welcome = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        const newIndex = activeIndex === index ? null : index;
        setActiveIndex(newIndex);

        
        document.querySelectorAll('.accordion-item').forEach((item, i) => {
            if (i === index) {
                if (activeIndex === index) {
                    
                    item.classList.add('closing');
                } else {
                   
                    item.classList.remove('closing');
                }
            } else {
                
                item.classList.remove('closing');
            }
        });
    };

    return (
        <div className='home-page'>
            <div>
                <Header />
            </div>

            <div className="home-container">
                <div className='home-button'>
                    <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
                        <button className='accordion-button' onClick={() => toggleAccordion(0)}>
                            Simulate Beverages
                        </button>
                        {activeIndex === 0 && (
                            <div className="accordion-content">
                                <p>Simulation of cocktails and coffee beverages will be shown with the ingredients integrated with it.</p>
                                <button className="accordion-inner-button">Start Simulation</button>
                            </div>
                        )}
                    </div>
                    <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <button className='accordion-button' onClick={() => toggleAccordion(1)}>
                            Recommend Flavors
                        </button>
                        {activeIndex === 1 && (
                            <div className="accordion-content">
                                <p>Content for Recommend Flavors</p>
                                <button className="accordion-inner-button">Get Recommendations</button>
                            </div>
                        )}
                    </div>
                    <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <button className='accordion-button' onClick={() => toggleAccordion(2)}>
                            Predict Costs
                        </button>
                        {activeIndex === 2 && (
                            <div className="accordion-content">
                                <p>Content for Predict Costs</p>
                                <button className="accordion-inner-button">Calculate Costs</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;