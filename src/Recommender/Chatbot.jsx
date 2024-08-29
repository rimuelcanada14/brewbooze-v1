import React from "react";

const Chatbot = ({ recommendation, onRecommendAgain }) => {
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
            <button onClick={onRecommendAgain} className="next3-button">
                Recommend Again
            </button>
          </div>
          
      </div>
    </>
    );
  };
  
  export default Chatbot;