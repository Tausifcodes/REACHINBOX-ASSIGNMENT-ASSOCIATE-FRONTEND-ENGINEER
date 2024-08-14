// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from './components/Theme';
import Onebox from './components/Onebox';
import ReplyBox from './components/ReplyBox';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Theme />} />
                <Route path="/onebox" element={<Onebox />} />
                <Route path="/reply/:threadId" element={<ReplyBox />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Login />} /> {/* Catch-all route */}
            </Routes>
        </Router>
    );
};

export default App;
