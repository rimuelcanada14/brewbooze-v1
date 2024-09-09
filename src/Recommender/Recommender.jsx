import React, { useState, useCallback } from 'react';
import axios from 'axios';

const CoffeeRecommender = () => {
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [cache, setCache] = useState({});

  const getRecommendation = useCallback(async () => {
    setLoading(true);
    
    if (cache.recommendation) {
      setRecommendation(cache.recommendation);
      setLoading(false);
      return;
    }

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: "Recommend a coffee flavor:"
          }],
          max_tokens: 50,
          n: 1,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
        }
      );

      const newRecommendation = response.data.choices[0].message.content.trim();
      setRecommendation(newRecommendation);
      setCache({ recommendation: newRecommendation });
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      if (error.response && error.response.status === 429) {
        setRecommendation('Rate limit exceeded. Please try again later.');
      } else {
        setRecommendation('Sorry, there was an error getting a recommendation.');
      }
    }
    setLoading(false);
  }, [cache]);

  return (
    <div>
      <button onClick={getRecommendation} disabled={loading}>
        {loading ? 'Getting recommendation...' : 'Get Coffee Recommendation'}
      </button>
      {recommendation && <p>{recommendation}</p>}
    </div>
  );
};

export default CoffeeRecommender;