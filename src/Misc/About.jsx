import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Misc.css'

const About = () => {
    return (
        <>
        <div className='misc-page'>
            <div>
                <Header />
            </div>

            <div className="misc-container">
                <div className = 'about-title'>
                    <h1>ABOUT US</h1>
                </div>
                <div className="about-pics">

                    <img src='./Logo.png' alt='BrewBooze Logo' className='about-logo' />
                    <p className='about-deets'>BrewBooze was created in compliance for Capstone 1 and 2 during the 4th year of the developers named
                        Rimuel Cañada and Lexter Louis Apuada. The web application serves as a guide for customers in knowing how their drink was made
                        and what flavor is best for them, and for entrepreneurs to know how much money to prepare in creating their own café. With this, 
                        be ready to Brew your business with BrewBooze!
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    
    </>
    );
};

export default About;