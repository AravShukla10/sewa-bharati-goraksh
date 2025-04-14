import React, { useState, useEffect } from 'react';
import * as Feather from 'feather-icons';
import './styles/Navbar.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    Feather.replace();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    Feather.replace();
  }, [isMenuOpen, language]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguage = () => setLanguage(prev => (prev === 'EN' ? 'HI' : 'EN'));

  const navItems = [
    { icon: 'home', label: 'Home' },
    { icon: 'info', label: 'About Us' },
    { icon: 'activity', label: 'Activity' },
    { icon: 'flag', label: 'Campaign/Drive' },
    { icon: 'file-text', label: 'E-Bulletin' },
    { icon: 'heart', label: 'Donate Here' },
    { icon: 'user-plus', label: 'Join Us' },
    { icon: 'phone', label: 'Contact Us' }
  ];

  return (
    <nav className="navbar">
      {isMobile && (
        <div className="hamburger" onClick={toggleMenu}>
          <i data-feather="menu"></i>
        </div>
      )}

      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
        <span>Sewa Bharti Goraksh</span>
      </div>

      <ul className={`navbar__menu ${isMenuOpen ? 'show' : ''}`}>
        {navItems.map((item, i) => (
          <li className="navbar__item" key={i}>
            <a href="#" className="navbar__link">
              <i data-feather={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <button className="lang-toggle" onClick={toggleLanguage}>
        <span className={language === 'HI' ? 'active' : ''}>अ</span>
        <span>/</span>
        <span className={language === 'EN' ? 'active' : ''}>A</span>
      </button>
    </nav>
  );
}

export default Navbar;