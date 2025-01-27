import React from 'react';
import '../styles/introduction.css';

const Introduction = () => {
    return (
        <section id="introduction" className="introduction">
            <h2>Introduction</h2>

            <div className="section">
                <h3>Background</h3>
                <p>
                    In today’s rapidly advancing technological landscape, the integration of artificial intelligence (AI) into everyday life holds tons of potential to improve the quality of life for individuals with disabilities. Visual impairment, in particular, poses significant challenges in navigation, object recognition, and overall independence. Everyday tasks that sighted individuals take for granted, such as recognizing faces or finding objects, can be daunting for the blind. These challenges often result in a dependence on others, limiting their ability to lead fully independent lives.
                </p>
                <p>
                    AI technologies, especially those involving real-time object detection and sight description, have shown great promise in addressing these issues. By utilizing computer vision and machine learning, AI systems can analyze visual data, providing immediate feedback and guidance to users. This capability can transform the way visually impaired individuals interact with their surroundings, offering them the confidence and tools necessary to navigate complex environments safely and independently. Such systems can alert users to obstacles in their path, identify important objects or people, and even provide detailed descriptions of their surroundings. By providing reliable, immediate, and contextually relevant feedback, AI can help overcome the challenges of visual impairment, promoting greater independence, confidence, and social inclusion.
                </p>
            </div>

            <div className="section">
                <h3>Problem Statements</h3>
                <ul>
                    <li>The inability to detect and recognize objects increases the risk of accidents and limits the mobility of blind individuals.</li>
                    <li>Limited access to assistive technologies in rural or economically disadvantaged areas exacerbates the challenges faced by visually impaired individuals.</li>
                    <li>Most assistive technologies fail to provide scene descriptions in the local language and thus do not cater specifically to Nepali-speaking users’ linguistic and cultural needs.</li>
                </ul>
            </div>

            <div className="section">
                <h3>Objectives</h3>
                <ul>
                    <li>Develop and integrate advanced computer vision algorithms to accurately detect objects in the user’s immediate environment.</li>
                    <li>Deliver precise and contextually relevant scene descriptions in the Nepali language to assist visually impaired users.</li>
                    <li>Create an easy-to-use interface that ensures accessibility for individuals with minimal technical skills.</li>
                </ul>
            </div>

            <div className="section">
                <h3>Scope</h3>
                <p>
                    The project possesses substantial market value and offers a wide-reaching impact on visually impaired individuals in Nepal. The primary objective of this project is to enhance various aspects of life for visually impaired individuals by providing real-time descriptions of their surroundings. This assistance will aid them in navigating complex spaces and identifying obstacles, significantly improving their ability to move independently and safely through different environments.
                </p>
                <p>
                    While apps like Envision AI, Be My Eyes, Seeing AI, and TapTapSee are available to assist visually impaired individuals, not all of them are user-friendly or offer support for the Nepali language. This creates a gap in accessibility for Nepali-speaking users, who may find it challenging to use these tools effectively due to language barriers or complex interfaces. We aim to create a prototype system to solve this challenge.
                </p>
            </div>
        </section>
    );
};

export default Introduction;