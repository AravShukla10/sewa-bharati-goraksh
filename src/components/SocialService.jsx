import React from 'react';
import './styles/SocialService.css';
import ImageCarousel from './Carousal';

const SocialService = ({ languageType, setActiveScreen }) => {
  const content = {
    hi: {
      mainHeading: 'सामाजिक सेवा',
      backButton: 'वापस जाएं',
      heading: 'सामाजिक सेवा आयाम के अन्तर्गत आने वाले उपक्रम एवं प्रकल्प निम्न हैं-',
      columns: [
        {
          title: 'सामाजिक सेवा उपक्रम',
          lists: [
            [
              'परिवार प्रबोधन (मिलन)', 'पर्यावरण जागरण', 'स्वच्छता अभियान', 'कन्यापूजन', 'सेवा बस्तियों में हवन',
              'छोटी-छोटी कथाये करना', 'धार्मिक ग्रन्थ वितरण', 'ग्राम में शिशु पालक केन्द्र', 'सामूहिक उत्सव के कार्यक्रम', 'मंदिर केन्द्रित कार्यक्रम',
            ],
            [
              'व्यसन मुक्ति शिबिर', 'यात्रा व्यवस्था (मेला, उत्सव)', 'ग्राम एवं बस्ती की सफाई', 'मंदिर स्वच्छता, श्रम सेवा',
              'जल संधारण एवं जल संरक्षण', 'वृक्षारोपण जेल में बाल सुधार केन्द्र', 'निर्धन कन्याओं का सामूहिक विवाह',
              'कृषि संगोष्ठी, तुलसी पौधा वितरण', 'सेवा कार्य दर्शन, सेवा विधि संग्रह',
            ],
          ],
        },
        {
          title: 'सामाजिक सेवा प्रकल्प',
          lists: [
            [
              'भजन मण्डली', 'कानूनी सहायता केन्द्र', 'किशोरी विकास प्रकल्प', 'मातृछाया', 'अन्नदान केन्द्र',
              'दीप पूजा', 'मातृ मण्डली', 'छात्रावास', 'जैव विविधता/जीवन व्यवस्था का संरक्षण',
            ],
          ],
        },
      ],
    },
    en: {
      mainHeading: 'Social Service',
      backButton: 'Back',
      heading: 'The initiatives and projects under the social service dimension are as follows:',
      columns: [
        {
          title: 'Social Service Initiatives',
          lists: [
            [
              'Family Counseling (Milan)', 'Environmental Awareness', 'Cleanliness Campaign', 'Girl Worship',
              'Havan in Service Colonies', 'Storytelling Sessions', 'Distribution of Religious Texts',
              'Childcare Centers in Villages', 'Community Festival Programs', 'Temple-Centered Programs',
            ],
            [
              'De-Addiction Camps', 'Travel Arrangements (Fairs, Festivals)', 'Village and Colony Cleaning',
              'Temple Cleaning and Service', 'Water Conservation', 'Tree Plantation, Juvenile Centers',
              'Mass Marriage for Poor Girls', 'Agricultural Workshops, Tulsi Plant Distribution',
              'Service Project Exhibition, Service Methods Collection',
            ],
          ],
        },
        {
          title: 'Social Service Projects',
          lists: [
            [
              'Bhajan Mandali', 'Legal Aid Centers', 'Adolescent Development Projects', 'Matruchhaya',
              'Food Donation Centers', 'Deep Puja', 'Mothers’ Groups', 'Hostels',
              'Biodiversity/Life System Preservation',
            ],
          ],
        },
      ],
    },
  };

  const data = content[languageType];

  const carouselImages = [
    { src: 'https://picsum.photos/800/400?random=41', alt: 'SocialService 1' },
    { src: 'https://picsum.photos/800/400?random=42', alt: 'SocialService 2' },
    { src: 'https://picsum.photos/800/400?random=43', alt: 'SocialService 3' },
  ];

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
        <div className="service-table">
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

export default SocialService;
