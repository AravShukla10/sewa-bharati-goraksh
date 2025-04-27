import React, { useEffect, useRef } from 'react';
import './styles/HealthService.css';
import ImageCarousel from './Carousal';

// Dynamically import all images from ../images/health
const importAll = (r) => r.keys().map((key) => ({
  src: r(key),
  alt: key.replace('./', '').replace(/\..+$/, ''), // Clean file name for alt
}));

const carouselImages = importAll(require.context('../images/disaster', false, /\.(png|jpe?g|webp|svg)$/));

const HealthService = ({ languageType, setActiveScreen, activeScreen }) => {
  // ref for scrolling the container div
  const containerRef = useRef(null);
  // ref for heading to move keyboard focus
  const headingRef = useRef(null);

  useEffect(() => {
    // scroll the container to top when screen changes
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
    // move keyboard focus to the heading for accessibility
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, [activeScreen]);

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
        <button className="back-button" onClick={() => setActiveScreen(1)}>
          {data.backButton}
        </button>
      </div>

      <ImageCarousel images={carouselImages} />

    </div>
  );
};

export default HealthService;
