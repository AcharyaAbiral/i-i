import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Introduction from './components/introduction';
import LiteratureReview from './components/literatureReview';
import RelatedTheory from './components/relatedTheory';
import Methodology from './components/methodology';
import ExperimentalSetup from './components/expSetup';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/literature-review" element={<LiteratureReview />} />
                <Route path="/related-theory" element={<RelatedTheory />} />
                <Route path="/methodology" element={<Methodology />} />
                <Route path="/experimental-setup" element={<ExperimentalSetup />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;