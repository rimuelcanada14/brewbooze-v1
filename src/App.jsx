import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Choose from './Simulator/Choose';
import CoffeeOptions from './Simulator/CoffeeOptions';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="home" element={<Home />} />
                <Route path="choose" element={<Choose />} />
                <Route path="coffee-opt" element={<CoffeeOptions />} />
            </Routes>
        </Router>
    );
}

export default App;
