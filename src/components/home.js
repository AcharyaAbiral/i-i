import React from 'react';
import '../styles/home.css';
import image from '../assets/image.png'; 

const Home = () => {
    return (
        <section id="home" className="home">
            <h1>Image Captioning and Object Detection</h1>
            <p>
                Empowering visually impaired individuals through advanced AI tools for image captioning
                and real-time object detection.
            </p>
            <a href="#features" className="scroll-down">Explore Features ↓</a>
        </section>
    );
};

export default Home;


