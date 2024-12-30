import React from 'react';
import '../styles/features.css';

const Features = () => {
    return (
        <section id="features" className="features">
            <h2>Features</h2>
            <div className="feature-list">
                <div className="feature-item">
                    <h3>AI-based Image Captioning</h3>
                    <p>Generate meaningful captions for images in real time.</p>
                </div>
                <div className="feature-item">
                    <h3>Real-time Object Detection</h3>
                    <p>Identify objects around you instantly.</p>
                </div>
                <div className="feature-item">
                    <h3>User-friendly Interface</h3>
                    <p>Designed with accessibility in mind.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;

