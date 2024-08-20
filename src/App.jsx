import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Home from './Home/Home';
import Choose from './Simulator/Choose';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="home" element={<Home />} />
                <Route path="choose" element={<Choose />} />
            </Routes>
        </Router>
    );
}

export default App;
