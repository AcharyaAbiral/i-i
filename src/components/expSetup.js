import React from 'react';
import '../styles/expSetup.css';

const ExperimentalSetup = () => {
    return (
        <section id="experimental-setup" class="experimental-setup">
            <h2>Experimental Setup</h2>

            <div class="section">
                <h3>Software Requirements</h3>
                <p>
                    The system was developed using Python, with key libraries and frameworks including:
                </p>
                <ul>
                    <li><b>OpenCV:</b> Used for image-processing tasks, such as object detection and image manipulation.</li>
                    <li><b>NumPy & SciPy:</b> Utilized for mathematical computations and handling arrays efficiently.</li>
                    <li><b>Matplotlib:</b> Used for visualizing the results of image manipulations and outputs.</li>
                    <li><b>PyTorch:</b> The deep learning framework used for model preparation and training.</li>
                    <li><b>Google Colab:</b> Used to train the models using GPUs available in the platform.</li>
                    <li><b>gTTS (Google Text-to-Speech API):</b> Integrated for text-to-speech conversion, enabling audio feedback.</li>
                </ul>
            </div>

            <div class="section">
                <h3>Dataset Collection</h3>

                <h4>MS COCO</h4>
                <p>
                    The Microsoft Common Objects in Context (MS COCO) dataset is a comprehensive and widely-used resource for tasks like object detection. It includes over 120,000 images across 80 categories with annotations such as bounding boxes, segmentation masks, and key points.
                </p>
                <p>
                    The dataset is particularly useful for developing detection models that can recognize objects in diverse and complex real-world scenes, making it a fitting choice for the assistive technology proposed in this study.
                </p>

                <h4>Flickr 8k</h4>
                <p>
                    The Flickr 8k dataset consists of 8,000 images, each paired with five human-annotated captions. The images primarily depict a single object or action, and the captions provide a simple description of the image.
                </p>
                <p>
                    Despite the smaller scale, the Flickr 8k dataset is valuable for training and evaluating image captioning models, especially for scenarios involving more straightforward visual contexts.
                </p>
            </div>

            <div class="section">
                <h3>Evaluation</h3>
                <p>
                    The performance of the implemented techniques will be evaluated based on various metrics, which were previously outlined in the methodology section. These metrics will assess the effectiveness of both the object detection and image captioning components of the system.
                </p>
            </div>
        </section>
    )
};

export default ExperimentalSetup;
