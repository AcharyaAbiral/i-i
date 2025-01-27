import React from 'react';
import '../styles/methodology.css';

const Methodology = () => {
    return (
        <section id="methodology" class="methodology">
            <h2>Methodology</h2>

            <div class="section">
                <h3>Requirement Analysis</h3>

                <h4>Functional Requirements</h4>
                <ul>
                    <li>Object Detection: The system shall accurately identify and differentiate between various objects.</li>
                    <li>Image Captioning: The system shall annotate detected objects with descriptive labels.</li>
                    <li>Nepali Speech Feedback: The system shall provide feedback in Nepali to ensure effective communication with users.</li>
                    <li>User Interface and Interaction: The system shall provide a user-friendly interface accessible to users with minimal technical skills.</li>
                </ul>

                <h4>Non-Functional Requirements</h4>
                <ul>
                    <li>Performance: Fast inference times to ensure real-time feedback.</li>
                    <li>Reliability: The system should gracefully handle errors.</li>
                    <li>Usability: An intuitive interface suitable for visually impaired users.</li>
                    <li>Maintainability: The system should follow best development practices.</li>
                    <li>Scalability: The system should be scalable for future growth.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Feasibility Analysis</h3>
                <p>
                    The project’s feasibility was analyzed from both technical and economic perspectives.
                </p>
                <h4>Technical Feasibility</h4>
                <p>
                    The algorithms and technologies required for object detection and image captioning are well-researched. The system does not require additional hardware, other than devices like smartphones or low-cost cameras.
                </p>
                <h4>Economic Feasibility</h4>
                <p>
                    The project utilizes open-source frameworks and datasets, which reduce both the cost and time required for training and data collection.
                </p>
            </div>

            <div class="section">
                <h3>Image Captioning</h3>
                <p>
                    The image captioning process involves data preprocessing, model design, and training using datasets such as COCO 2014 and Flickr 8k.
                </p>
                <ul>
                    <li><b>Data Preprocessing:</b> Images are resized and normalized, and captions are tokenized.</li>
                    <li><b>Model Design:</b> The model uses a CNN-based architecture for feature extraction, followed by an LSTM-based decoder.</li>
                    <li><b>Training and Evaluation:</b> The model is trained with cross-entropy loss and evaluated using BLEU scores and other metrics.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Object Detection and Localization</h3>
                <p>
                    The YOLO algorithm is selected for object detection. The methodology includes dataset preparation, model training, and evaluation.
                </p>
                <ul>
                    <li><b>Dataset Preparation:</b> Images are resized, normalized, and annotations are converted into YOLO format.</li>
                    <li><b>Model Preparation:</b> The YOLO network is trained with data augmentation and validation strategies.</li>
                    <li><b>Testing and Validation:</b> Performance metrics like mAP and IoU are used to evaluate the model.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Nepali Speech Feedback</h3>
                <p>
                    The system integrates the Google Text-to-Speech API for Nepali speech synthesis, providing real-time feedback to users.
                </p>
                <ul>
                    <li><b>Speech Synthesis Module:</b> The module synthesizes Nepali speech from text.</li>
                    <li><b>Text-to-Speech Conversion:</b> The system converts text to spoken Nepali for interaction.</li>
                    <li><b>Integration:</b> The Google TTS API is integrated to deliver feedback through the user interface.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Evaluation</h3>
                <p>
                    The performance of the system is evaluated using both object detection and image captioning metrics.
                </p>
                <h4>Image Captioning Metrics</h4>
                <ul>
                    <li><b>BLEU:</b> Measures n-gram overlap between generated and reference captions.</li>
                    <li><b>METEOR:</b> Evaluates synonymy and stem for semantic similarity.</li>
                    <li><b>CIDEr:</b> Measures agreement between generated captions and reference captions.</li>
                    <li><b>ROUGE:</b> Evaluates recall-oriented n-gram matches between generated and reference captions.</li>
                </ul>
                <h4>Object Detection Metrics</h4>
                <ul>
                    <li><b>Precision:</b> Measures the accuracy of object detection.</li>
                    <li><b>Recall:</b> Measures the ability to detect all objects.</li>
                    <li><b>IoU:</b> Evaluates overlap between predicted and ground truth bounding boxes.</li>
                    <li><b>mAP:</b> Measures the average precision for all classes.</li>
                </ul>
            </div>
        </section>
    )
};

export default Methodology;