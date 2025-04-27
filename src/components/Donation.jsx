import React, { useEffect, useRef } from 'react';
import './styles/Donation.css'; 
import qrImage from '../images/qr.png'; 

const Donation = ({ languageType }) => {
  const topRef = useRef(null);

  const content = {
    en: {
      heading: "Support Us with Your Donation",
      description: "Scan the QR code below to donate:",
      qrImageAlt: "Donation QR Code",
    },
    hi: {
      heading: "हमारी मदद करें, दान करके",
      description: "दान करने के लिए नीचे दिए गए क्यूआर कोड को स्कैन करें:",
      qrImageAlt: "दान क्यूआर कोड",
    }
  };

  const currentContent = languageType === 'hi' ? content.hi : content.en;

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="donation-container" ref={topRef}>
      <h2>{currentContent.heading}</h2>
      <p>{currentContent.description}</p>
      <div className="qr-image-wrapper">
        <img src={qrImage} alt={currentContent.qrImageAlt} className="qr-image" />
      </div>
    </div>
  );
};

export default Donation;
