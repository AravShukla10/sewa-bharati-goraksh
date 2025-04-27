import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles/Navbar.css';
import HeroSection from './HeroSection';

function Navbar({ languageType, setLanguageType }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Map route paths to their corresponding indices
  const routeMap = {
    '/': 0,
    '/about': 1,
    '/activities': 2,
    '/campaigns': 3,
    '/e-bulletin': 4,
    '/donate': 5,
    '/join': 6,
    '/contact': 7
  };

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname;
    const index = Object.entries(routeMap).find(([route]) => path.startsWith(route))?.[1] || 0;
    setActiveItem(index);
  }, [location.pathname]);

  const sectionScrollMap = {
    0: 'hero-section',
    1: 'about-section',   
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

  const scrollToSection = async (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (isMobile) setIsMenuOpen(false);
  };
  
  const handleNavItemClick = async (index) => {
    setActiveItem(index);
  
    if (index === 6) {
      window.open('https://docs.google.com/forms/d/1n0THm9wrKArIKr6qJGhs32vDvBEcgqC6jeXvYqgfFEU/preview', '_blank'); 
      if (isMobile) setIsMenuOpen(false);
      return;
    }
  
    if (index === 0) {  
      if (location.pathname === '/') {
        scrollToSection('hero-section');
      } else {
        navigate('/');
        setTimeout(() => {
          scrollToSection('hero-section');
        }, 300); 
      }
      if (isMobile) setIsMenuOpen(false);
      return;
    }
    
    if (index === 7) {
      navigate('/contact-us');
      if (isMobile) setIsMenuOpen(false);
      return;
    }
  
    if (index === 5) {
      navigate('/donation');
      if (isMobile) setIsMenuOpen(false);
      return;
    }
  
    if (index === 4) {
      navigate('/ebulletin');
      if (isMobile) setIsMenuOpen(false);
      return;
    }
  
    if (sectionScrollMap.hasOwnProperty(index)) {
      if (location.pathname !== '/') {
        navigate('/');
      }
      await scrollToSection(sectionScrollMap[index]);
      if (isMobile) setIsMenuOpen(false);
      return;
    }
  
    // Handle other routes
    const route = Object.entries(routeMap).find(([_, i]) => i === index)?.[0];
    if (route) {
      navigate(route);
    }
    
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
      <div className="navbar__logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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