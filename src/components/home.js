import React from 'react';
import '../styles/home.css';
import Team from './team';
import Features from './features';
import Contact from './contact';

const Home = () => {
    return (
        <div>
            <section id="home" className="home">
                <h1>Image Captioning and Object Detection</h1>
                <p>
                    Empowering visually impaired individuals through advanced AI tools for image captioning
                    and real-time object detection.
                </p>
                <a href="#features" className="scroll-down">Explore Features ↓</a>
            </section>
            <Features />
            <Team />
            <Contact />
        </div>
    );
};

export default Home;


