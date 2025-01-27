import React from 'react';
import '../styles/relatedTheory.css';

const RelatedTheory = () => {
    return (
        <section id="related-theory" className="related-theory">
            <h2>Related Theory</h2>

            <div className="section">
                <h3>Computer Vision</h3>
                <p>
                    Computer vision is a branch of artificial intelligence that enables machines to interpret and process visual data from the physical world. It involves techniques like object detection, image segmentation, and feature recognition. One prominent algorithm in this domain is <b>YOLO (You Only Look Once)</b>, a deep learning model that performs real-time object detection with high accuracy and efficiency. YOLO is particularly suited for applications where speed and precision are essential, such as aiding visually impaired individuals in navigating their surroundings.
                </p>
                <p>
                    By utilizing computer vision, the system can detect and classify objects in the user's environment, providing essential feedback to enhance their mobility and safety.
                </p>
            </div>

            <div className="section">
                <h3>Natural Language Processing (NLP)</h3>
                <p>
                    Natural Language Processing focuses on the interaction between computers and human language. It enables machines to understand, interpret, and generate natural language text or speech. For this project, <b>Text-to-Speech (TTS)</b> technology is integral in converting textual scene descriptions into spoken words in the Nepali language. Additionally, <b>language modeling</b> ensures that scene descriptions are grammatically correct and contextually meaningful.
                </p>
                <p>
                    The system's multilingual capabilities cater to users who speak Nepali or a combination of Nepali and English, ensuring accessibility across diverse linguistic preferences.
                </p>
            </div>

            <div className="section">
                <h3>Assistive Technologies</h3>
                <p>
                    Assistive technologies aim to improve the quality of life for individuals with disabilities by enhancing their independence and accessibility to information. Tools such as <b>screen readers</b>, <b>navigation aids</b>, and <b>scene description systems</b> fall within this category. However, many existing solutions lack local language support or are not designed for low-resource settings.
                </p>
                <p>
                    This project aims to address these gaps by developing a localized, user-friendly assistive system tailored specifically for Nepali-speaking visually impaired individuals. By leveraging computer vision and NLP, the system ensures reliable and context-aware guidance, empowering users to navigate their environments confidently.
                </p>
            </div>
        </section>
    );
};

export default RelatedTheory;
