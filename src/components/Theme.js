import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Onebox from './Onebox';
import Login from './Login';
import '../styles/darkTheme.css'; 
import '../styles/lightTheme.css'; 

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : 'light'} style={{ height: '100vh' }}>
            <button onClick={() => setDarkMode(!darkMode)} style={{position: 'absolute', top: '10px', right: '10px'}}>Toggle Dark Mode</button>
            <Router>
                <Routes>
                    <Route path="/onebox" element={<Onebox />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Theme;
