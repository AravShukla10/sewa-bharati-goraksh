import React from 'react';
import './styles/SewaBhartiSections.css';
import educationImg from '../images/11.webp';
import healthImg from '../images/12.webp';
import selfRelianceImg from '../images/13.webp';
import socialImg from '../images/14.webp';
import { useNavigate } from 'react-router-dom';

const CampaignSections = ({ languageType }) => {
  const navigate = useNavigate(); // Hook for navigation

  const sectorImages = [educationImg, healthImg, selfRelianceImg, socialImg];

  const content = {
    en: [
      { heading: 'Adolescent Development', description: 'Sewa Bharti focuses on nurturing adolescents through education, life skills training, and emotional support to build a stronger future.', route: '/adolescent-development' },
      { heading: 'Disaster Management', description: 'Sewa Bharti actively engages in disaster relief efforts, providing emergency aid, rehabilitation support, and rebuilding communities.', route: '/disaster-management' },
      { heading: 'Proper Nutrition', description: 'Sewa Bharti promotes proper nutrition through awareness programs, food distribution drives, and support for undernourished children and families.', route: '/proper-nutrition' },
    ],
    hi: [
      { heading: 'किशोर विकास', description: 'सेवा भारती शिक्षा, जीवन कौशल प्रशिक्षण और भावनात्मक समर्थन के माध्यम से किशोरों के समग्र विकास पर ध्यान केंद्रित करता है, ताकि एक मजबूत भविष्य का निर्माण हो सके।', route: '/adolescent-development' },
      { heading: 'आपदा प्रबंधन', description: 'सेवा भारती आपदा राहत कार्यों में सक्रिय रूप से भाग लेता है, आपातकालीन सहायता, पुनर्वास समर्थन और समुदायों के पुनर्निर्माण में सहयोग करता है।', route: '/disaster-management' },
      { heading: 'समुचित पोषण', description: 'सेवा भारती जागरूकता कार्यक्रमों, खाद्य वितरण अभियानों और कुपोषित बच्चों और परिवारों के लिए सहायता के माध्यम से उचित पोषण को बढ़ावा देता है।', route: '/proper-nutrition' },
    ],
  };

  const handleSectorClick = (route) => {
    navigate(route); 
  };

  return (
    <div className="sewa-bharti-sectors">
      {content[languageType].map((sector, index) => (
        <div key={index} className="sector" onClick={() => handleSectorClick(sector.route)} style={{ cursor: 'pointer' }}>
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

export default CampaignSections;
