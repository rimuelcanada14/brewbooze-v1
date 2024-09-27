import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';

import ChooseSimulator from './Simulator/ChooseSimulator';
import CoffeeOptions from './Simulator/CoffeeOptions';
import CocktailOptions from './Simulator/CocktailOptions';

import GinPomelo from './Simulator/GinPomelo';
import Shembot from './Simulator/Shembot';
import TiaMaria from './Simulator/TiaMaria';
import RPG from './Simulator/RPG';

import Arabica from './Simulator/Arabica';

import ChooseRecommender from './Recommender/ChooseReco';
import CoffeeRecommender from './Recommender/CoffeeRecommender';
import CocktailRecommender from './Recommender/CocktailRecommender';

import Predict from './CostPredict/MLR';

import About from './Misc/About';
import Credits from './Misc/Credits';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="home" element={<Home />} />

                <Route path="choose-simulator" element={<ChooseSimulator />} />
                <Route path="coffee-opt" element={<CoffeeOptions />} />
                <Route path="cocktail-opt" element={<CocktailOptions />} />

                <Route path="gin-pomelo" element={<GinPomelo />} />
                <Route path="shembot" element={<Shembot />} />
                <Route path="rpg" element={<RPG />} />
                <Route path="tia-maria" element={<TiaMaria />} />

                <Route path="arabica" element={<Arabica />} />

                <Route path="choose-recommender" element={<ChooseRecommender />} />
                <Route path="recommend-coffee" element={<CoffeeRecommender />} />
                <Route path="recommend-cocktail" element={<CocktailRecommender />} />

                <Route path="predict" element={<Predict />} />

                <Route path="about" element={<About />} />
                <Route path="credits" element={<Credits />} />
                
            </Routes>
        </Router>
    );
}

export default App;
