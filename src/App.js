import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

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

  return (
    <div className="App">
      <Navbar
        languageType={languageType}
        setLanguageType={setLanguageType}
        onNavItemClick={handleNavChange}
      />

      {showModal && (
        <div className="modal">
          <div className="modal-content">
          <h2>
              {languageType === 'hi'
                ? 'सेवा भारती गोरक्ष'
                : 'Sewa Bharti Goraksh'}
            </h2>
            <h2>
              {languageType === 'hi'
                ? 'यह पृष्ठ अभी निर्माणाधीन है, कृपया बाद में आएं'
                : 'This page is under construction, stay tuned!'}
            </h2>
            <button className="modal-close" onClick={closeModal}>
              {languageType === 'hi' ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      )}
     {activeScreen === 1 && <Home languageType={languageType} />}
    </div>
  );
}

export default App;
