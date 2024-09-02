import React from "react";
import { useNavigate } from 'react-router-dom';

const Chatbot = ({ recommendation, onRecommendAgain }) => {
  const navigate = useNavigate();

    return (
        <>
      <div className='chatbot-page'>
          <div className="chatbot-container">
              <h1 className = 'chatbot-title'>RESULT</h1>
              <div className="chatbot">
                  <p>{recommendation}</p>
              </div>       
          </div>
          <div className="button-reco">
          <button onClick={() => navigate('/choose-recommender')} className="prev-button">
                Choose Beverage
            </button>
            <button onClick={onRecommendAgain} className="next3-button">
                Recommend Again
            </button>
          </div>
          
      </div>
    </>
    );
  };
  
  export default Chatbot;