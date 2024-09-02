import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot';
import Header from '../components/Header';
import './Recommender.css';

const CoffeeRecommendation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [allergy, setAllergy] = useState('');
  const [tempSelectedOption, setTempSelectedOption] = useState(null);

  const questions = [
    "Do you prefer your coffee hot or cold?",
    "Do you enjoy strong, bold flavors or milder, more balanced flavors?",
    "Do you like your coffee black or with milk?",
    "Do you prefer your coffee with or without sweetness?",
    "Do you prefer a lighter coffee with less caffeine or a stronger coffee with more caffeine?",
    "Do you like a rich, creamy texture in your coffee?",
    "Are you interested in trying a unique or unconventional coffee flavor?",
    "Do you enjoy a more intense espresso-based coffee or a longer, more diluted coffee?",
    "Would you like to try a coffee that is more fruity and floral or more chocolatey and nutty?",
    "Do you prefer a simple coffee or one with additional flavors and toppings?"
  ];
  
  const options = [
    ["Hot", "Cold"],
    ["Strong and bold", "Mild and balanced"],
    ["Black", "With milk"],
    ["Sweet", "Not sweet"],
    ["Yes", "No"],
    ["Lighter, less caffeine", "Stronger, more caffeine"],
    ["Yes", "No"],
    ["Espresso-based (intense)", "Longer (more diluted)"],
    ["Fruity and floral", "Chocolatey and nutty"],
    ["Simple", "With flavors and toppings"]
  ];

  const handleAnswerClick = (value) => {
    setTempSelectedOption(value);
  };  

  const handleNext = async () => {
    if (currentQuestionIndex === 0) {
      if (!allergy.trim()) return;
      setInputValue(`Allergy: ${allergy}\n`);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex < questions.length - 1) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex - 1] = tempSelectedOption;
      setAnswers(newAnswers);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
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
                "content": "Recommend a coffee flavor from these options: (Arabica, Robusta, Liberica, Excelsa, Black, Americano, Latte, Cappuccino, Espresso Shots, Doppio, Macchiato, Mocha, Flat White, Ristretto, Affogato, Iced Coffee, Iced Espresso, Cold Brew, Frappuccino). Only provide in the statement: 'The recommended coffee flavor for your preferences is: ' and provide its ingredients. Also state that the ingredient they are allergic to is present or not. If that ingredient is present, DO NOT RECOMMEND A FLAVOR and state why."
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

  return (
    <>
      <div className='header-off'>
        <Header />
      </div>

      <div>
        {!showChatbot ? (
          <div className='reco-page'>
            <h2 className='reco-title'>Coffee Flavor Recommender</h2>
            {currentQuestionIndex === 0 ? (
              <div>
                <p className='reco-questions'>Please enter any allergies you have:</p>
                <input
                  type="text"
                  value={allergy}
                  onChange={(e) => setAllergy(e.target.value)}
                  placeholder="Type your allergies here..."
                  style={{ width: '85%', padding: '10px', marginBottom: '20px', borderRadius: '10px' }}
                />
              </div>
            ) : (
              <div>
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
                  (currentQuestionIndex === 0 && !allergy.trim()) || // Disable if allergy input is empty
                  (currentQuestionIndex > 0 && tempSelectedOption === null) // Disable if no option selected
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
        )}
      </div>
    </>
  );
};

export default CoffeeRecommendation;
