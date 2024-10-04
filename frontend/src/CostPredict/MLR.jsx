import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Predict.css';

const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
};
const staffNumber = (number) => {
    return new Intl.NumberFormat('en-US', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(number);
};

const MLRForm = () => {
    const [capital, setCapital] = useState('');
    const [year, setYear] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); 
        setResult(null);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', {
                capital: parseFloat(capital),
                year: parseInt(year, 10),
            });
            
            const data = response.data;
            console.log('Response Data:', data);

           
    
            if (data) {
                const equipment = data.equipment || 0;
                const ingredients = data.ingredients || 0;
                const rent = data.rent || 0;
                const renovation = data.renovation || 0;
                const permits = data.permits || 0;
                const utilities = data.utilities || 0;
                const staffIncome = data.staff_income || 0;

                // Calculate total cost
                const initialCost = equipment + renovation + permits;
                const monthlyCost = ingredients + rent + utilities + staffIncome;
                const totalCost = equipment + ingredients + rent + renovation + permits + utilities + staffIncome;
                
                const getMinIncome = (year) => {
                    if (year == 2024) {
                        return 19350;
                    } else if (year == 2025) {
                        return 19920.80;
                    } else if (year == 2026) {
                        return 20528.42;
                    } else if (year == 2027) {
                        return 21144.27;
                    } else if (year == 2028) {
                        return 21778.60;
                    } else if (year == 2029) {
                        return 22431.95;
                    } else {
                        return 19350; 
                    }
                };
                
                const min_income = getMinIncome(year); 
                const staffNumber = staffIncome / min_income;
                const remainingCost = parseFloat(capital) - totalCost;
                

                setResult({
                    equipment,
                    ingredients,
                    rent,
                    renovation,
                    permits,
                    utilities,
                    staffIncome,
                    initialCost,
                    monthlyCost,
                    totalCost,
                    remainingCost,
                    staffNumber,
                    r2Score: data.r2_score, 
                });
                setShowModal(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while fetching the data.');
        }
    };

    const closeModal = () => {
        setShowModal(false);
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
                            min = '1200000'
                        />
                    </div>
                    <div className='predict-input2'>
                        <label>Year:</label><br/>
                        <select 
                            type="number" 
                            value={year} 
                            onChange={(e) => setYear(e.target.value)} 
                            required 
                            className='predict-year'
                            id="predict-box"
                        >
                            <option value="" disabled hidden>Select a year</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                        </select>
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
                            <div className="modal-body-container">
                                <div className="cost-breakdown">
                                    <p className="modal-title">Equipment:</p>
                                    <p className = "modal-result">₱{formatNumber(result.equipment)}</p>
                                    <p className="modal-title">Renovation:</p>
                                    <p className = "modal-result">₱{formatNumber(result.renovation)}</p>
                                    <p className="modal-title">Permits:</p>
                                    <p className = "modal-result">₱{formatNumber(result.permits)}</p>
                                    <p className="modal-title">Rent:</p>
                                    <p className = "modal-result">₱{formatNumber(result.rent)}</p>
                                    <p className="modal-title">Ingredients:</p>
                                    <p className = "modal-result">₱{formatNumber(result.ingredients)}</p>
                                    <p className="modal-title">Utilities:</p>
                                    <p className = "modal-result">₱{formatNumber(result.utilities)}</p>
                                    <p className="modal-title">Staff Income:</p>
                                    <p className = "modal-result">₱{formatNumber(result.staffIncome)}</p>
                                </div>
                                <div className="total-cost">
                                    <p className="modal-title">Initial Cost:</p>
                                    <p className = "modal-result">₱{formatNumber(result.initialCost)}</p>
                                    <p className="modal-title">Monthly Cost:</p>
                                    <p className ="modal-monthly">₱{formatNumber(result.monthlyCost)}</p>
                                    <p className="modal-title">Employees:</p>
                                    <p className = "modal-result">{staffNumber(result.staffNumber)}</p>
                                    <br/><br/><br/><br/><br/>
                                    <p className="modal-total">Total Cost:</p>
                                    <p className = "total-result">₱{formatNumber(result.totalCost)}</p>
                                    <p className="modal-title">Remaining:</p>
                                    <p className = "modal-result">₱{formatNumber(result.remainingCost)}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MLRForm;
