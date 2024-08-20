import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Choose from './Simulator/Choose';
import CoffeeOptions from './Simulator/CoffeeOptions';
import CocktailOptions from './Simulator/CocktailOptions';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="home" element={<Home />} />
                <Route path="choose" element={<Choose />} />
                <Route path="coffee-opt" element={<CoffeeOptions />} />
                <Route path="cocktail-opt" element={<CocktailOptions />} />
            </Routes>
        </Router>
    );
}

export default App;
