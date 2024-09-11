import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Predict.css';

const MLRForm = () => {
    const [capital, setCapital] = useState('');
    const [inflationRate, setInflationRate] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        setError(''); // Reset any previous error
        setResult(null); // Reset previous result
    
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                capital: parseFloat(capital),
                inflation_rate: parseFloat(inflationRate),
            });
            
            const data = response.data;
            console.log('Response Data:', data);
    
            if (data) {
                // Assuming data contains keys: equipment, ingredients, rent, renovation, and permits
                setResult({
                    equipment: data.equipment,
                    ingredients: data.ingredients,
                    rent: data.rent,
                    renovation: data.renovation,
                    permits: data.permits,
                    r2Score: data.r2_score, // Add r2_score to result if available
                });
                setShowModal(true); // Show the modal
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while fetching the data.');
        }
    };

    const closeModal = () => {
        setShowModal(false); // Hide the modal
    };

    return (
        <div className='predict-page'>
            <div>
                <Header />
            </div>

            <div className="predict-container">
                <h1 className='predict-title'>Cost Breakdown</h1>
                <form onSubmit={handleSubmit} className='predict-user'>
                    <div className='predict-input1'>
                        <label>Capital:</label> <br/>
                        <input 
                            type="number" 
                            value={capital} 
                            onChange={(e) => setCapital(e.target.value)} 
                            required 
                            className='predict-capital'
                            id="predict-box"
                        />
                    </div>
                    <div className='predict-input2'>
                        <label>Inflation Rate (%):</label><br/>
                        <input 
                            type="number" 
                            step="0.01" 
                            value={inflationRate} 
                            onChange={(e) => setInflationRate(e.target.value)} 
                            required 
                            className='predict-inflation'
                            id="predict-box"
                        />
                    </div>
                    <button type="submit" className='predict-submit'>Predict Cost Breakdown</button>
                </form>
                {error && <p>{error}</p>}
            </div>

            {/* Modal for displaying the result */}
            <div className={`modal ${showModal ? 'modal-show' : ''}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Cost Breakdown</h2>
                    </div>
                    <div className="modal-body">
                        {result && (
                            <div>
                                <p>Equipment: <br/>₱{result.equipment.toFixed(2)}</p>
                                <p>Ingredients: <br/>₱{result.ingredients.toFixed(2)}</p>
                                <p>Rent: <br/>₱{result.rent.toFixed(2)}</p>
                                <p>Renovation:<br/> ₱{result.renovation.toFixed(2)}</p>
                                <p>Permits:<br/> ₱{result.permits.toFixed(2)}</p>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <h3>R² Score: {result?.r2Score?.toFixed(4)}</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MLRForm;
