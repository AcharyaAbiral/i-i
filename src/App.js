import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import Introduction from './components/introduction';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<Introduction />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;