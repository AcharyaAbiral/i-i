import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Features from './components/features';
import Team from './components/team';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
