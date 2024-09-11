// src/components/MLRForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const MLRForm = () => {
    const [capital, setCapital] = useState('');
    const [inflationRate, setInflationRate] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    // React Component (frontend)
    const handleSubmit = async () => {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ capital, inflation_rate })
      });

      const data = await response.json();
      console.log('Response Data:', data);  // Check if r2_score is present
      if (data.r2_score) {
        alert(`R² Score: ${data.r2_score}`);
      }
    };


    return (
        <div>
            <h1>MLR Cost Breakdown</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Capital:</label>
                    <input 
                        type="number" 
                        value={capital} 
                        onChange={(e) => setCapital(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Inflation Rate (%):</label>
                    <input 
                        type="number" 
                        step="0.01" 
                        value={inflationRate} 
                        onChange={(e) => setInflationRate(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Predict Cost Breakdown</button>
            </form>
            {error && <p>{error}</p>}
            {result && (
                <div>
                    <h2>Cost Breakdown</h2>
                    <p>Equipment: ${result.equipment.toFixed(2)}</p>
                    <p>Ingredients: ${result.ingredients.toFixed(2)}</p>
                    <p>Rent: ${result.rent.toFixed(2)}</p>
                    <p>Renovation: ${result.renovation.toFixed(2)}</p>
                    <p>Permits: ${result.permits.toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default MLRForm;
