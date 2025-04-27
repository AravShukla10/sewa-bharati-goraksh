import React from 'react';
import './styles/SewaBhartiSections.css';
import educationImg from '../images/11.webp';
import healthImg from '../images/12.webp';
import selfRelianceImg from '../images/13.webp';
import socialImg from '../images/14.webp';
import { useNavigate } from 'react-router-dom';

const SewaBhartiSections = ({ languageType }) => {
  const navigate = useNavigate(); // Hook for navigation

  const sectorImages = [educationImg, healthImg, selfRelianceImg, socialImg];

  const content = {
    en: [
      { heading: 'Education', description: 'Sewa Bharti is dedicated to providing quality education in underserved areas, ensuring every child has the opportunity to learn and grow.', route: '/education' },
      { heading: 'Health', description: 'Sewa Bharti works towards providing affordable healthcare services, focusing on the well-being of the community.', route: '/health-service' },
      { heading: 'Self-Reliance', description: 'Through various programs, Sewa Bharti empowers individuals to become self-reliant and financially independent.', route: '/self-reliance' },
      { heading: 'Social', description: 'Sewa Bharti engages in social welfare activities, improving the quality of life and fostering community spirit.', route: '/social-service' },
    ],
    hi: [
      { heading: 'शिक्षा', description: 'सेवा भारती वंचित क्षेत्रों में गुणवत्तापूर्ण शिक्षा प्रदान करने के लिए प्रतिबद्ध है, यह सुनिश्चित करते हुए कि प्रत्येक बच्चे को सीखने और बढ़ने का अवसर मिले।', route: '/education' },
      { heading: 'स्वास्थ्य', description: 'सेवा भारती किफायती स्वास्थ्य सेवाएं प्रदान करने की दिशा में काम करता है, समुदाय की भलाई पर ध्यान केंद्रित करता है।', route: '/health-service' },
      { heading: 'स्वावलंबन', description: 'विभिन्न कार्यक्रमों के माध्यम से, सेवा भारती व्यक्तियों को आत्मनिर्भर और वित्तीय रूप से स्वतंत्र बनने के लिए सशक्त बनाता है।', route: '/self-reliance' },
      { heading: 'सामाजिक', description: 'सेवा भारती सामाजिक कल्याण गतिविधियों में संलग्न है, जीवन की गुणवत्ता में सुधार करता है और समुदाय की भावना को बढ़ावा देता है।', route: '/social-service' },
    ],
  };

  const handleSectorClick = (route) => {
    navigate(route); // Navigating to the route
  };

  return (
    <div className="sewa-bharti-sectors">
      {content[languageType].map((sector, index) => (
        <div key={index} className="sector" onClick={() => handleSectorClick(sector.route)}>
          <div className="sector__image-wrapper">
            <img 
              src={sectorImages[index]} 
              alt={sector.heading} 
              className="sector__image"
            />
          </div>
          <h3>{sector.heading}</h3>
          <p>{sector.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SewaBhartiSections;
