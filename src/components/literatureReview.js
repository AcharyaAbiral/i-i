import React from 'react';
import '../styles/literatureReview.css';

const LiteratureReview = () => {
    const papers = [
        {
            title: "Real-Time Object Detection with Audio Feedback using YOLO vs. YOLO v3",
            content:
                "This 2021 paper explores real-time object detection using YOLO and YOLO v3 with audio feedback for the visually impaired. It highlights YOLO v3’s superior performance with smaller objects due to advanced feature extraction capabilities, while acknowledging challenges in complex scenes and overlapping objects. Future work includes dataset expansion and enhanced audio feedback.",
            reference: "Real-Time Object Detection with Audio Feedback using YOLO vs. YOLO v3 (2021)",
            className: "paper-1",
        },
        {
            title: "Reader and Object Detector for the Blind",
            content:
                "This 2020 study combines Raspberry Pi, Tesseract OCR, and TensorFlow for text reading and object detection. While effective, it struggles with small font sizes and lacks multilingual support. Future enhancements focus on improving text recognition and adding multiple language support.",
            reference: "Reader and Object Detector for the Blind (2020)",
            className: "paper-2",
        },
        {
            title: "Obstacle Detection for Visually Impaired Patients",
            content:
                "Published in 2014, this study introduces a wearable stereoscopic sonar system with haptic feedback. While effective at close range, it struggles with outdoor environments and fast-moving obstacles. Future work aims to enhance detection range and improve feedback clarity.",
            reference: "Obstacle Detection for Visually Impaired Patients (2014)",
            className: "paper-3",
        },
        {
            title: "VISION - Wearable Speech-Based Feedback System",
            content:
                "This 2020 study integrates Raspberry Pi, Google Text-to-Speech, and YOLO for object detection and text reading. While effective, it struggles in low-light conditions. Future work focuses on improving lighting adaptability, processing speed, and affordability for developing countries.",
            reference: "VISION - Wearable Speech-Based Feedback System (2020)",
            className: "paper-4",
        },
        {
            title: "Show and Tell: A Neural Image Caption Generator",
            content:
                "This foundational 2015 work by Vinyals et al. combines CNNs for feature extraction with RNNs for caption generation. The model set new benchmarks for image captioning tasks and established a standard for integrating deep learning in image captioning.",
            reference: "Show and Tell: A Neural Image Caption Generator (2015)",
            className: "paper-5",
        },
    ];

    return (
        <section id="literature-review" className="literature-review">
            <h2>Literature Review</h2>
            <div className="grid gap-10">
                {papers.map((paper, index) => (
                    <div
                        key={index}
                        className={`paper ${paper.className}`}
                    >
                        <h3>{paper.title}</h3>
                        <p>{paper.content}</p>
                        <p className="reference">
                            <strong>Reference:</strong> <i>{paper.reference}</i>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LiteratureReview;