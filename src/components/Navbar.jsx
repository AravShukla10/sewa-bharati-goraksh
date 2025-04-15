import React, { useState, useEffect } from 'react';
import './styles/Navbar.css';

function Navbar({ languageType, setLanguageType, onNavItemClick }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  
  const sectionScrollMap = {
    0: 'hero-section',
    1: 'sector-section',   
    2: 'activity-section',  
    3: 'campaign-section',  
    7: 'contact-section'    
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) setIsMenuOpen(false);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) setIsMenuOpen(false);
  };

  const handleNavItemClick = (index) => {
    setActiveItem(index);
    
    // Handle scrollable sections
    if (sectionScrollMap.hasOwnProperty(index)) {
      scrollToSection(sectionScrollMap[index]);
      return;
    }
    
    // Default handling for other items
    onNavItemClick(index === 0 ? 1 : index + 1);
    if (isMobile) setIsMenuOpen(false);
  };

  const navItems = [
    { label: languageType === 'hi' ? 'होम' : 'Home' },
    { label: languageType === 'hi' ? 'हमारे बारे में' : 'About Us' },
    { label: languageType === 'hi' ? 'गतिविधियाँ' : 'Activity' },
    { label: languageType === 'hi' ? 'अभियान' : 'Campaign' },
    { label: languageType === 'hi' ? 'ई-बुलेटिन' : 'E-Bulletin' },
    { label: languageType === 'hi' ? 'दान करें' : 'Donate Here' },
    { label: languageType === 'hi' ? 'हमसे जुड़ें' : 'Join Us' },
    { label: languageType === 'hi' ? 'संपर्क करें' : 'Contact Us' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                handleNavItemClick(i);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="lang-toggle"
        onClick={() => setLanguageType(languageType === 'en' ? 'hi' : 'en')}
      >
        <span className={languageType === 'hi' ? 'active' : ''}>अ</span>
        <span>/</span>
        <span className={languageType === 'en' ? 'active' : ''}>A</span>
      </button>

      {isMobile && (
        <div className="hamburger" onClick={(e) => { e.stopPropagation(); toggleMenu(); }}>
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