import React, { useState, useRef,useEffect, act } from 'react';
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
function App() {
  const [languageType, setLanguageType] = useState('en');
  // activeScreen === 1 means show Home; any other value means non-home
  const [activeScreen, setActiveScreen] = useState(1);
  // showModal state when we need to display the "under construction" message.
  const [showModal, setShowModal] = useState(false);
  // Timer reference for the auto-close
  const modalTimerRef = useRef(null);
  
  // Callback to handle nav item change from Navbar
  const handleNavChange = (screen) => {

    if (screen === 2) {
      setActiveScreen(2);
      return;
    }

    if(screen ===3 ){
      setActiveScreen(3);
      return;
    }

    if (screen !== 1) {
      setShowModal(true);
      // Start timer and save a reference
      modalTimerRef.current = setTimeout(() => {
        setShowModal(false);
        setActiveScreen(1);
      }, 3000);
    } else {
      setActiveScreen(1);
    }
  };
  
  const closeModal = () => {
    if (modalTimerRef.current) {
      clearTimeout(modalTimerRef.current);
      modalTimerRef.current = null;
    }
    setShowModal(false);
    setActiveScreen(1);
  };
  useEffect(() => {
    const handlePopState = (event) => {
      if (activeScreen !== 1) {
        event.preventDefault();
        setActiveScreen(1);
        window.history.pushState(null, "", window.location.href); 
      }
    };
  
    window.addEventListener('popstate', handlePopState);
  
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [activeScreen]);
  
  return (
    <div className="App">
      <Navbar
        languageType={languageType}
        setLanguageType={setLanguageType}
        onNavItemClick={handleNavChange}
        setActiveScreen={setActiveScreen}
      />
      
      {showModal && (
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
      )}
      
      {activeScreen === 1 && <Home languageType={languageType} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 2 && <EBulletin languageType={languageType} activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 3 && <Donation languageType={languageType}  activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 4 && <Education languageType={languageType}  activeScreen={activeScreen}setActiveScreen={setActiveScreen}/>}
      {activeScreen === 5 && <HealthService languageType={languageType}  activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 6 && <SelfReliance languageType={languageType}  activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 7 && <SocialService languageType={languageType}  activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      {activeScreen === 8 && <ContactUs languageType={languageType}  activeScreen={activeScreen} setActiveScreen={setActiveScreen}/>}
      <Footer languageType={languageType} setActiveScreen={setActiveScreen} activeScreen={activeScreen}/>
    </div>
  );
}

export default App;