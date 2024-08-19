import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Welcome from './Welcome/Welcome';

const App = () => {
    return (
        createRoutesFromElements(
            <Route path="/">
              <Route index element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
        )
    );
    
export default App;
