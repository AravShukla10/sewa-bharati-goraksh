import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // For page navigation
import './styles/Education.css';
import ImageCarousel from './Carousal';
import CarouselWithText from './CarouselWithText';
import Footer from './Footer';

// Dynamically import all images for 1st carousel (education folder)
const importEducationImages = (r) => r.keys().map((key) => ({ src: r(key), alt: key.split('/').pop() }));
const carouselImages = importEducationImages(require.context('../images/disaster', false, /\.(png|jpe?g|webp)$/));


const Disaster = ({ languageType }) => {
  const navigate = useNavigate(); // Hook to handle navigation
  const containerRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

 
  const content = {
    hi: {
      mainHeading: 'आपदा प्रबंधन',
      backButton: 'वापस जाएं',
    },
    en: {
      mainHeading: 'Disaster Management',
      backButton: 'Back',
    }
  };

  const data = content[languageType];

  return (
    <div className="page-container" ref={containerRef}>
    <div className="navbar-space"></div>
    
    <div className="top-bar">
      <h1 className="main-heading" ref={headingRef} tabIndex={-1}>
        {data.mainHeading}
      </h1>
      <button className="back-button" onClick={() => navigate('/')}>
        {data.backButton}
      </button>
    </div>
    
    <ImageCarousel images={carouselImages} />
    
    </div>
  );
};


export default Disaster;



