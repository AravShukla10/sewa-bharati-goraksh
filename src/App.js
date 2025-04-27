import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import EBulletin from './components/E-bulletin';
import Donation from './components/Donation';
import Home from './components/Home';
import sevabahrati from './images/image.webp';
import Education from './components/Education';
import Footer from './components/Footer';
import SocialService from './components/SocialService';
import HealthService from './components/HealthService';
import SelfReliance from './components/SelfReliance';
import ContactUs from './components/ContactUs';
import Disaster from './components/Disaster-management';
function Modal({ languageType, closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <img src={sevabahrati} alt="Sewa Bharti Logo" className="modal-logo" />
          <h2 className="modal-title">
            {languageType === 'hi' ? 'सेवा भारती गोरक्ष' : 'Sewa Bharti Goraksh'}
          </h2>
          <button className="modal-close-btn" onClick={closeModal}>
            <span>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-message">
            {languageType === 'hi'
              ? 'यह पृष्ठ अभी निर्माणाधीन है, कृपया बाद में आएं'
              : 'This page is under construction, stay tuned!'}
          </p>
          <button className="modal-action-btn" onClick={closeModal}>
            {languageType === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [languageType, setLanguageType] = useState('en');
  const [showModal, setShowModal] = useState(false);
  const modalTimerRef = useRef(null);
  const navigate = useNavigate(); 

  // Handle nav item clicks
  const handleNavChange = (screen) => {
    switch (screen) {
      case 1:
        navigate('/');
        break;
      case 2:
        navigate('/e-bulletin');
        break;
      case 3:
        navigate('/donation');
        break;
      case 4:
        navigate('/education');
        break;
      case 5:
        navigate('/health-service');
        break;
      case 6:
        navigate('/self-reliance');
        break;
      case 7:
        navigate('/social-service');
        break;
      case 8:
        navigate('/contact-us');  
        break;
      case 9:
        navigate('/disaster-management');  
        break;
      default:
        setShowModal(true);
        modalTimerRef.current = setTimeout(() => {
          setShowModal(false);
          navigate('/');
        }, 3000);
    }
  };

  const closeModal = () => {
    if (modalTimerRef.current) {
      clearTimeout(modalTimerRef.current);
      modalTimerRef.current = null;
    }
    setShowModal(false);
    navigate('/');
  };

  return (
    <div className="App">
      <Navbar
        languageType={languageType}
        setLanguageType={setLanguageType}
        onNavItemClick={handleNavChange}
      />

      {showModal && <Modal languageType={languageType} closeModal={closeModal} />}

      <Routes>
        <Route path="/" element={<Home languageType={languageType} />} />
        <Route path="/ebulletin" element={<EBulletin languageType={languageType} />} />
        <Route path="/donation" element={<Donation languageType={languageType} />} />
        <Route path="/education" element={<Education languageType={languageType} />} />
        <Route path="/health-service" element={<HealthService languageType={languageType} />} />
        <Route path="/self-reliance" element={<SelfReliance languageType={languageType} />} />
        <Route path="/social-service" element={<SocialService languageType={languageType} />} />
        <Route path="/contact-us" element={<ContactUs languageType={languageType} />} />
         <Route path="/disaster-management" element={<Disaster languageType={languageType} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer languageType={languageType} />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
