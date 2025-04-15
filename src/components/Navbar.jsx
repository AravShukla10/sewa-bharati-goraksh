import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';

function Navbar({ languageType, setLanguageType, onNavItemClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0); // Default to first item

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // When a nav item is clicked, update local activeItem and call parent's onNavItemClick.
  const handleNavItemClickLocal = (index) => {
    setActiveItem(index);
    if (index === 0) {
      onNavItemClick(1);
    } else {
      onNavItemClick(index + 1);
    }
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { label: languageType === 'hi' ? 'होम' : 'Home' },
    { label: languageType === 'hi' ? 'हमारे बारे में' : 'About Us' },
    { label: languageType === 'hi' ? 'गतिविधियाँ' : 'Activity' },
    { label: languageType === 'hi' ? 'अभियान/ड्राइव' : 'Campaign/Drive' },
    { label: languageType === 'hi' ? 'ई-बुलेटिन' : 'E-Bulletin' },
    { label: languageType === 'hi' ? 'दान करें' : 'Donate Here' },
    { label: languageType === 'hi' ? 'हमसे जुड़ें' : 'Join Us' },
    { label: languageType === 'hi' ? 'संपर्क करें' : 'Contact Us' }
  ];

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={require('../images/image.webp')} alt="Logo" />
        <span>Sewa Bharti Goraksh</span>
      </div>

      <ul className={`navbar__menu ${isMenuOpen || !isMobile ? 'show' : ''}`}>
        {navItems.map((item, i) => (
          <li className="navbar__item" key={i}>
            <a
              href="#"
              className={`navbar__link ${activeItem === i ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClickLocal(i);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="lang-toggle"
        onClick={() =>
          setLanguageType(languageType === 'en' ? 'hi' : 'en')
        }
      >
        <span className={languageType === 'hi' ? 'active' : ''}>अ</span>
        <span>/</span>
        <span className={languageType === 'en' ? 'active' : ''}>A</span>
      </button>

      {isMobile && (
        <div
          className="hamburger"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
