import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Accessibility Tool</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/introduction">Introduction</Link></li>
                <li><Link to="/literature-review">Literature Review</Link></li>
                <li><Link to="/related-theory">Related Theory</Link></li>
                <li><Link to="/methodology">Methodology</Link></li>
                <li><Link to="/experimental-setup">Experimental Setup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;