import React from 'react';
import './styles/Education.css';
import ImageCarousel from './Carousal';
import CarouselWithText from './CarouselWithText';
import ImageCarouselWithText from './ImageCarouselWithText';
import Footer from './Footer';

// Dynamically import all images for 1st carousel (education folder)
const importEducationImages = (r) => r.keys().map((key) => ({ src: r(key), alt: key.split('/').pop() }));
const carouselImages = importEducationImages(require.context('../images/education', false, /\.(png|jpe?g|webp)$/));

// Dynamically import all balsanskar images for 2nd carousel
const importAll = (r) => r.keys().map((key) => r(key));
const imageArray1 = importAll(require.context('../images/balsanskar', false, /\.webp$/));

const Education = ({ languageType, setActiveScreen }) => {
  const content = {
    hi: {
      mainHeading: 'शिक्षा',
      backButton: 'वापस जाएं',
      heading: 'शिक्षा आयाम के अन्तर्गत आने वाले उपक्रम एवं प्रकल्प निम्न हैं-',
      columns: [
        {
          title: 'शिक्षा सेवा उपक्रम',
          lists: [
            ['बालगोकुलम', 'अभ्यासिका', 'चल वाचनालय', 'प्रौढ़ साक्षरता', 'डोला पुस्तकालय', 'परीक्षा मार्ग दर्शन'],
            ['व्यवसाय मार्ग दर्शन', 'व्यक्तित्व विकास शिबिर', 'शिक्षा उपयोगी साहित्य वितरण', 'कक्षा 10, 12 के छात्रों को', 'विशेष मार्ग दर्शन', 'प्रश्न मंजूषा'],
          ],
        },
        {
          title: 'शिक्षा सेवा प्रकल्प',
          lists: [
            ['बालवाड़ी/शिशु वाटिका', 'प्राथमिक शिक्षा (कक्षा 4 तक)', 'माध्यमिक शिक्षा (कक्षा 5 से 8)', 'उच्च विद्या के केन्द्र', 'आवासीय विद्यालय', 'अभ्यासिका (Study center)', 'ट्यूशन/कोचिंग सेन्टर'],
            ['बाल संस्कार केन्द्र', 'संस्कृत शिक्षण', 'वेद शिक्षा', 'पुस्तकालय/वाचनालय', 'सचल विज्ञान, प्रयोगशाला', 'एकल विद्यालय', 'दिव्यांग विद्यालय'],
          ],
        },
      ],
    },
    en: {
      mainHeading: 'Education',
      backButton: 'Back',
      heading: 'The initiatives and projects under the education dimension are as follows:',
      columns: [
        {
          title: 'Educational Service Initiatives',
          lists: [
            ['Bal Gokulam', 'Study Center', 'Mobile Library', 'Adult Literacy', 'Dola Library', 'Exam Guidance'],
            ['Career Guidance', 'Personality Development Camp', 'Educational Material Distribution', 'Special Guidance for Class 10 and 12 Students', 'Quiz Competitions', 'Question Banks'],
          ],
        },
        {
          title: 'Educational Service Projects',
          lists: [
            ['Kindergarten/Pre-school', 'Primary Education (up to Class 4)', 'Secondary Education (Classes 5 to 8)', 'Higher Education Centers', 'Residential Schools', 'Study Centers', 'Tuition/Coaching Centers'],
            ['Child Value Education Centers', 'Sanskrit Education', 'Vedic Education', 'Library/Reading Room', 'Mobile Science Laboratory', 'Single-Teacher Schools', 'Schools for the Differently-Abled'],
          ],
        },
      ],
    },
  };

  const data = content[languageType];

  const content1 = {
    en: {
      title: 'Bal Sanskar Kendra',
      description:
        'Bal Sanskar Learning Centers are being operated in sewa basti with the motto of “Learn by Playing” for those children whose parents are engaged in daily wedges work (majdoori) and they are generally used to collect waste plastic from dustbins or just wandering here or there. In the absence of adequate resources and proper guidance, these children may get involved in criminal activities. At Bal Sanskar Kendra, these children are getting educated with sanskar. These students learn about their study course in a play environment. Prarthana & Yogasan are also conducted on a daily basis. They are taught good services like cleanliness, health, society welfare and National devotion.',
    },
    hi: {
      title: 'बाल संस्कार केन्द्र',
      description:
        'सेवा बस्तियों में बाल संस्कार शिक्षण केन्द्रों का संचालन "खेल-खेल में सीखो" के उद्देश्य से किया जा रहा है। इन केन्द्रों पर ऐसे बच्चे रहते हैं जिनके माता-पिता मजदूरी करते हैं और उन्हें कूड़ेदानों से प्लास्टिक इकट्ठा करने या इधर-उधर भटकने के लिए भेजा जाता है। पर्याप्त संसाधनों और उचित मार्गदर्शन के अभाव में ये बच्चे आपराधिक गतिविधियों में शामिल हो सकते हैं। बाल संस्कार केन्द्र में इन बच्चों को संस्कारों के साथ शिक्षा दी जा रही है। ये छात्र खेल-खेल में अपने अध्ययन पाठ्यक्रम के बारे में सीखते हैं। प्रार्थना और योगासन भी प्रतिदिन करवाए जाते हैं। उन्हें स्वच्छता, स्वास्थ्य, समाज कल्याण और राष्ट्र भक्ति जैसी अच्छी सेवाओं के लिए सिखाया जाता है।',
    },
  };

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

      <h2 className="education-heading">{data.heading}</h2>

      <div className="education-table-container">
        <div className="education-table">
          {data.columns.map((column, index) => (
            <div className="table-column" key={index}>
              <div className="column-header">{column.title}</div>
              <div className="column-content">
                {column.lists.map((list, idx) => (
                  <div className="sub-column" key={idx}>
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

      <CarouselWithText
        images={imageArray1}
        position="left"
        content={content1}
        languageType={languageType}
      />
    </div>
  );
};

export default Education;
