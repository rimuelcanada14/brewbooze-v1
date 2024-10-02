import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';
const Home = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

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
    <>
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
                                <p>Simulation of cocktails and coffee beverages will be shown with the ingredients integrated with it!</p>
                                <button className="accordion-inner-button" onClick={() => navigate('/choose-simulator')}>Start Simulation</button>
                            </div>
                        )}
                    </div>
                    <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
                        <button className='accordion-button' onClick={() => toggleAccordion(1)}>
                            Recommend Flavors
                        </button>
                        {activeIndex === 1 && (
                            <div className="accordion-content">
                                <p>With the help of GPT OpenAI, BrewBooze can help you in finding the best flavor of beverage 
                                    based on your preferences!</p>
                                <button className="accordion-inner-button"  onClick={() => navigate('/choose-recommender')}>Get Recommendations</button>
                            </div>
                        )}
                    </div>
                    <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
                        <button className='accordion-button' onClick={() => toggleAccordion(2)}>
                            Predict Costs
                        </button>
                        {activeIndex === 2 && (
                            <div className="accordion-content">
                                <p>BrewBooze will provide a breakdown of costs in starting your own café to make you prepared for its future!</p>
                                <button className="accordion-inner-button" onClick={() => navigate('/predict')}>Calculate Costs</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default Home;