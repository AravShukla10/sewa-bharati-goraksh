import React from 'react';
import './styles/HealthService.css';
import ImageCarousel from './Carousal';

// Dynamically import all images from ../images/health
const importAll = (r) => r.keys().map((key) => ({
  src: r(key),
  alt: key.replace('./', '').replace(/\..+$/, ''), // Clean file name for alt
}));

const carouselImages = importAll(require.context('../images/health', false, /\.(png|jpe?g|webp|svg)$/));

const HealthService = ({ languageType, setActiveScreen }) => {
  const content = {
    hi: {
      mainHeading: 'स्वास्थ्य सेवा',
      backButton: 'वापस जाएं',
      heading: 'स्वास्थ्य सेवा आयाम के अन्तर्गत आने वाले उपक्रम एवं प्रकल्प निम्न हैं-',
      columns: [
        {
          title: 'स्वास्थ्य सेवा उपक्रम',
          lists: [
            ['स्वास्थ्य के उपक्रम', 'रक्तदान शिबिर', 'रक्तदात दाता सूची', 'वैद्यकी सहायता', 'सेवा कार्य स्वास्थ्य', 'गृह औषधि शिविर', 'रूग्णालय संपर्क'],
            ['स्वास्थ्य परिक्षण शिबिर', 'योग प्रशिक्षण शिबिर', 'दवाई संकलन केन्द्र', 'स्वास्थ्य जागरण कार्यक्रम', 'रूग्ण सेवा (रोगियों की सेवा)', 'स्वास्थ्य चिकित्सा शिबिर', 'प्रथमोप चार प्रशिक्षण', 'रूग्णोपयोगी साधना केन्द्र'],
          ],
        },
        {
          title: 'स्वास्थ्य सेवा प्रकल्प',
          lists: [
            ['ग्राम आरोग्य रक्षक', 'सचल चिकित्सालय', 'स्थिर चिकित्सालय', 'प्राकृतिक उपचार केन्द्र', 'ब्लड बैंक (रक्त पेढी)', 'आई. बैंक (नेत्र पेढी)', 'स्वास्थ्य शिक्षा केन्द्र'],
            ['कुष्ठरोग सेवा', 'दिव्यांग सेवा', 'रूग्ण सहायता', 'कौन्सलिंग केन्द्र', 'व्यायामशाला', 'योग केन्द्र', 'रूग्ण वाहिक'],
          ],
        },
      ],
    },
    en: {
      mainHeading: 'Health Service',
      backButton: 'Back',
      heading: 'The initiatives and projects under the health service dimension are as follows:',
      columns: [
        {
          title: 'Health Service Initiatives',
          lists: [
            ['Health Initiatives', 'Blood Donation Camps', 'Blood Donor List', 'Medical Assistance', 'Health Service Work', 'Home Medicine Camps', 'Hospital Contact'],
            ['Health Check-up Camps', 'Yoga Training Camps', 'Medicine Collection Centers', 'Health Awareness Programs', 'Patient Service (Serving Patients)', 'Medical Treatment Camps', 'First Aid Training', 'Patient Resource Centers'],
          ],
        },
        {
          title: 'Health Service Projects',
          lists: [
            ['Village Health Workers', 'Mobile Clinics', 'Permanent Clinics', 'Natural Therapy Centers', 'Blood Bank', 'Eye Bank', 'Health Education Centers'],
            ['Leprosy Care', 'Services for the Differently-Abled', 'Patient Assistance', 'Counseling Centers', 'Gyms', 'Yoga Centers', 'Ambulances'],
          ],
        },
      ],
    },
  };

  const data = content[languageType];

  return (
    <div className="page-container">
      <div className="navbar-space"></div>

      <div className="top-bar">
        <h1 className="main-heading">{data.mainHeading}</h1>
        <button className="back-button" onClick={() => setActiveScreen(1)}>
          {data.backButton}
        </button>
      </div>

      <ImageCarousel images={carouselImages} />

      <h2 className="section-heading">{data.heading}</h2>

      <div className="table-container">
        <div className="health-service-table">
          {data.columns.map((column, index) => (
            <div className="table-column" key={index}>
              <div className="column-header">{column.title}</div>
              <div className="column-content">
                {column.lists.map((list, idx) => (
                  <div className={idx % 2 === 0 ? 'left-column' : 'right-column'} key={idx}>
                    <ul className="content-list">
                      {list.map((item, id) => (
                        <li key={id}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthService;
