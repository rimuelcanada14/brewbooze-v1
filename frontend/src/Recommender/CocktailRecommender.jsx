import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
import Header from '../components/Header';
import './Recommender.css';
import { Puff } from 'react-loading-icons';

const CoffeeRecommendation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [allergy, setAllergy] = useState('');
  const [tempSelectedOption, setTempSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    "Do you prefer a classic cocktail or something more experimental?",
    "Would you like a cocktail with a fruity or more herbal taste?",
    "Are you in the mood for a strong or light cocktail?",
    "Do you prefer a cocktail with a sweet or sour flavor profile?",
    "Would you like a cocktail with a bold or subtle flavor?",
    "Do you prefer a cocktail with a twist of citrus or one with a richer, darker flavor?",
    "Would you like a cocktail with a high or low alcohol content?",
    "Are you interested in a cocktail with a simple or complex mix of ingredients?",
    "Do you want a cocktail that’s more traditional or one with a modern twist?",
    "Would you prefer a cocktail that’s more refreshing or warming?"
  ];
  
  const options = [
    ["Classic", "Experimental"],
    ["Fruity", "Herbal"],
    ["Strong", "Light"],
    ["Sweet", "Sour"],
    ["Bold", "Subtle"],
    ["Citrus", "Richer/Darker"],
    ["High", "Low"],
    ["Simple", "Complex"],
    ["Traditional", "Modern"],
    ["Refreshing", "Warming"]
  ];

  const handleAnswerClick = (value) => {
    setTempSelectedOption(value);
    setShowPopup(false);
  };

  const handleNext = async () => {
    if (currentQuestionIndex === 0) {
      if (!allergy.trim()) return;
      setInputValue(`Allergy: ${allergy}\n`);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (tempSelectedOption === null) {
      setShowPopup(true); 
    } else if (currentQuestionIndex < questions.length - 1) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex - 1] = tempSelectedOption;
      setAnswers(newAnswers);
      setTempSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setLoading(true);

      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex - 1] = tempSelectedOption;
      setAnswers(newAnswers);

      const formattedAnswers = questions.map((question, index) => {
        return `${question} Answer: ${answers[index] || 'Not answered'}`;
      }).join('\n');
      setInputValue(`Allergy: ${allergy}\n${formattedAnswers}`);

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            "model": "gpt-4-turbo",
            "messages": [
              {
                "role": "system",
                "content": "Recommend a cocktail flavor from these options: (Gin Pom, Weng Weng, Shembot, Expired, Destroso, RPG, Kisay, Red Alert, Tia Maria’s Zombie, Toma Collins). Only provide in the statement: 'The recommended cocktail flavor for your preferences is: ' and provide its ingredients. Also state that the ingredient they are allergic to is present or not. If that ingredient is present, DO NOT RECOMMEND THE FLAVOR and recommend another that is close to the answers to the questions."
              },
              {
                "role": "user",
                "content": `Allergy: ${allergy}\n${formattedAnswers}`
              }
            ],
            "temperature": 1,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            },
          }
        );

        const assistantMessage = response.data.choices[0].message.content.trim();
        setRecommendation(assistantMessage);
      } catch (error) {
        console.error("Error fetching response from OpenAI:", error);
      } finally {
        setLoading(false);
        setShowChatbot(true);
      }
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTempSelectedOption(answers[currentQuestionIndex - 2] || null);
    }
  };

  const handleRecommendAgain = () => {
    setShowChatbot(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setInputValue('');
    setRecommendation('');
    setAllergy('');
    setTempSelectedOption(null);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  return (
    <>
      <div className='header-off'>
        <Header />
      </div>

      <div className='recommender'>
        {loading ? (
          <div className="loading-screen">
            <Puff stroke="#000" height={50} width={50} />
          </div>
        
        ) : (
          !showChatbot ? (
            <div className='reco-page'>
              <h2 className='reco-title'>Cocktail Flavor Recommender</h2>
              {currentQuestionIndex === 0 ? (
                <div className='reco-input'>
                  <p className='reco-questions'>Please enter any allergies you have:</p>
                  <input
                    type="text"
                    value={allergy}
                    onChange={(e) => setAllergy(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your allergies here..."
                    style={{ width: '85%', padding: '10px', marginBottom: '20px', borderRadius: '10px' }}
                  />
                </div>
              ) : (
                <div>
                  <p className='question-number'>
                    {currentQuestionIndex + 1}/{questions.length}
                  </p>
                  <p className='reco-questions'>{questions[currentQuestionIndex - 1]}</p>
                  <div className='answer-buttons'>
                    {options[currentQuestionIndex - 1].map(option => (
                      <button
                        key={option}
                        onClick={() => handleAnswerClick(option)}
                        className={`answer-button ${tempSelectedOption === option ? 'selected' : ''}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className='button-reco'>
                <button onClick={handlePrev} disabled={currentQuestionIndex === 0} className='prev-button'>
                  Previous
                </button>
                <button className='next3-button'
                  onClick={handleNext}
                  disabled={
                    (currentQuestionIndex === 0 && !allergy.trim()) ||
                    (currentQuestionIndex > 0 && tempSelectedOption === null)
                  }
                >
                  {currentQuestionIndex === questions.length ? 'Finish' : 'Next'}
                </button>
              </div>
            </div>
          ) : (
            <Chatbot
              recommendation={recommendation}
              onRecommendAgain={handleRecommendAgain}
            />
          )
        )}
        {showPopup && (
          <div className='popup'>
            <div className='popup-content'>
              <p>Please answer the question before proceeding!</p>
              <button onClick={closePopup}>OK</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CoffeeRecommendation;

