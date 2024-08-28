import React, { useState } from 'react';
import axios from 'axios';
import Chatbot from './Chatbot'; // Adjust the import path as necessary
import Header from '../components/Header';
import './Recommender.css';

const CoffeeRecommendation = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [allergy, setAllergy] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  // Questions array with options
  const questions = [
    "Do you prefer a coffee that's rich and bold or light and delicate?",
    "Would you rather have a coffee with a sweet profile or a nutty profile?",
    "Do you enjoy coffee with chocolate or vanilla notes more?",
    "ADo you prefer coffee with fruity notes or floral notes?",
    "Do you prefer light roast or dark roast coffee?",
    "Do you like coffee blends or single-origin coffees more?",
    "Would you prefer coffee that pairs well with desserts or coffee that pairs well with savory foods?",
    "Are you open to trying coffee with spices or flavored extracts?",
    "Do you prefer your coffee hot or iced?"
  ];

  const options = [
    ["Rich and bold", "Light and delicate"],
    ["Sweet", "Nutty"],
    ["Chocolate", "Vanilla"],
    ["Fruity", "Floral"],
    ["Light roast", "Dark roast"],
    ["Blends", "Single-origin"],
    ["Desserts", "Savory foods"],
    ["Spices", "Flavored extracts"],
    ["Hot", "Iced"]
  ];

  const handleAnswerClick = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
    setSelectedOption(value); // Track selected option
  };

  const handleNext = async () => {
    if (currentQuestionIndex === 0) {
      // Handle allergy input
      if (!allergy.trim()) return; // Prevent proceeding if allergy input is empty
      setInputValue(`Allergy: ${allergy}\n`);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      // Format the answers with questions for final input field
      const formattedAnswers = questions.map((question, index) => {
        return `${question} Answer: ${answers[index] || 'Not answered'}`;
      }).join('\n');
      setInputValue(`Allergy: ${allergy}\n${formattedAnswers}`);

      // Fetch recommendation based on answers
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            "model": "gpt-3.5-turbo",
            "messages": [
              {
                "role": "system",
                "content": "You are a coffee/cocktail flavor recommender. Provide a flavor recommendation based on the following input. Provide a summary of the user's answer."
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
      setSelectedOption(answers[currentQuestionIndex - 1] || null); // Restore selected option for the previous question
    }
  };

  const handleRecommendAgain = () => {
    setShowChatbot(false);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setInputValue('');
    setRecommendation('');
    setAllergy('');
    setSelectedOption(null); // Reset selected option
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
                      className={`answer-button ${selectedOption === option ? 'selected' : ''}`}
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
                disabled={(currentQuestionIndex === 0 && !allergy.trim()) || (currentQuestionIndex > 0 && selectedOption === null)}
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
