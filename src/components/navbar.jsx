import React, { useState, useEffect } from 'react';
import * as Feather from 'feather-icons';
import './styles/Navbar.css';

function Navbar({ languageType, setLanguageType }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    Feather.replace();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    Feather.replace();
  }, [isMenuOpen, languageType]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { icon: 'home', label: languageType === 'hi' ? 'होम' : 'Home' },
    { icon: 'info', label: languageType === 'hi' ? 'हमारे बारे में' : 'About Us' },
    { icon: 'activity', label: languageType === 'hi' ? 'गतिविधियाँ' : 'Activity' },
    { icon: 'flag', label: languageType === 'hi' ? 'अभियान/ड्राइव' : 'Campaign/Drive' },
    { icon: 'file-text', label: languageType === 'hi' ? 'ई-बुलेटिन' : 'E-Bulletin' },
    { icon: 'heart', label: languageType === 'hi' ? 'दान करें' : 'Donate Here' },
    { icon: 'user-plus', label: languageType === 'hi' ? 'हमसे जुड़ें' : 'Join Us' },
    { icon: 'phone', label: languageType === 'hi' ? 'संपर्क करें' : 'Contact Us' }
  ];

  return (
    <nav className="navbar">
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <i data-feather="menu"></i>
        </div>
      )}

      <div className="navbar__logo">
        <img src={require('../images/image.png')} alt="Logo" />
        <span>Sewa Bharti Goraksh</span>
      </div>

      <ul className={`navbar__menu ${isMenuOpen || !isMobile ? 'show' : ''}`}>
        {navItems.map((item, i) => (
          <li className="navbar__item" key={i}>
            <a href="#" className="navbar__link">
              <i data-feather={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <button className="lang-toggle" onClick={() => setLanguageType(languageType === 'en' ? 'hi' : 'en')}>
      <span className={languageType === 'hi' ? 'active' : ''}>अ</span>
        <span>/</span>
        <span className={languageType === 'en' ? 'active' : ''}>A</span>
      </button>
      
    </nav>
  );
}

export default Navbar;
