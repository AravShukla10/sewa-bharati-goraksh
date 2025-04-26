import React from 'react';
import './styles/SelfReliance.css';
import ImageCarousel from './Carousal';

// Dynamically import all images from ../images/selfreliance
const importAll = (r) => r.keys().map((key) => ({
  src: r(key),
  alt: key.replace('./', '').replace(/\..+$/, ''), // Clean filename for alt
}));

const carouselImages = importAll(require.context('../images/selfreliance', false, /\.(png|jpe?g|webp|svg)$/));

const SelfReliance = ({ languageType, setActiveScreen }) => {
  const content = {
    hi: {
      mainHeading: 'स्वावलंबन सेवा',
      backButton: 'वापस जाएं',
      heading: 'स्वावलंबन सेवा आयाम के अन्तर्गत आने वाले उपक्रम एवं प्रकल्प निम्न हैं-',
      columns: [
        {
          title: 'स्वावलंबन सेवा उपक्रम',
          lists: [
            ['अगरबत्ती, धूपबत्ती', 'हवन सामग्री', 'पापड़', 'अचार', 'मुरब्बा'],
            ['जैविक खाद प्रशिक्षण', 'जैविक कृषि प्रशिक्षण', 'व्यावसायिक मार्गदर्शन', 'सिलाई-कढ़ाई', 'सौन्दर्य (ब्यूटी)'],
          ],
        },
        {
          title: 'स्वावलंबन सेवा प्रकल्प',
          lists: [
            ['स्वयंसहायता समूह', 'व्यवसाय प्रशिक्षण केन्द्र', 'हस्तकला प्रशिक्षण', 'सिलाई प्रशिक्षण', 'बीज बैंक'],
            ['शिल्प कला प्रशिक्षण केन्द्र', 'वन व जड़ी बूटी औषधि का निर्माण', 'गौ सेवा- पंचगव्य उत्पादन', 'परिचारिका, दाई प्रशिक्षण', 'अन्न व फल प्रक्रिया'],
          ],
        },
      ],
    },
    en: {
      mainHeading: 'Self-Reliance Service',
      backButton: 'Back',
      heading: 'The initiatives and projects under the self-reliance dimension are as follows:',
      columns: [
        {
          title: 'Self-Reliance Service Initiatives',
          lists: [
            ['Incense Sticks, Dhoop', 'Havan Material', 'Papad', 'Pickles', 'Murabba'],
            ['Organic Fertilizer Training', 'Organic Farming Training', 'Vocational Guidance', 'Stitching and Embroidery', 'Beauty Care Training'],
          ],
        },
        {
          title: 'Self-Reliance Service Projects',
          lists: [
            ['Self-Help Groups', 'Business Training Centers', 'Handicraft Training', 'Stitching Training', 'Seed Bank'],
            ['Handicraft Art Centers', 'Herbal Medicine Production', 'Cow Service - Panchagavya Production', 'Nurse and Midwife Training', 'Food and Fruit Processing'],
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
        <div className="self-reliance-table">
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

export default SelfReliance;
