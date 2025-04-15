import React from 'react';
import HeroSection from './HeroSection';
import SewaBhartiSections from './SewaBhartiSections';
import ServiceMessage from './ServiceMessage';
import CarouselWithText from './CarouselWithText';
import ImageCarouselWithText from './ImageCarouselWithText';
import Footer from './Footer';

// Import images
import img1 from '../images/1.webp';
import img2 from '../images/2.webp';
import img3 from '../images/3.webp';
import img4 from '../images/4.webp';
import img5 from '../images/5.webp';
import img6 from '../images/6.webp';
import img7 from '../images/7.webp';
import img8 from '../images/8.webp';
import img9 from '../images/9.webp';
import img10 from '../images/10.webp';
import nutrition from '../images/nutrition.webp';
import disastermanagment from '../images/disastermanagment.webp';
import adolscentdevelopment from '../images/adolscentdevelopment.webp';



function Home({ languageType }) {
  const imageArray1 = [img1, img2, img3, img4, img5];
  const imageArray2 = [img6, img7, img8, img9, img10];

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

  const content2 = {
    en: {
      title: 'Hostel for Students',
      description: `Sewa Bharati, Goraksh Prant, are committed to the upliftment and empowerment of SC/ST students of the society. Our goal is to awaken their potential and provide them with the skills and resources they need to become self-reliant and self-respecting citizens. We are proud to take on the responsibility of finding and training the best and brightest boys and girls who will become the torchbearers for our nation's future. In this continuation, Sewa Bharati, Goraksh Prant has started a hostel in Tarwan, Aryamgarh (Ajamgarh), Uttar Pradesh since 2016.`,
    },
    hi: {
      title: 'छात्रों के लिए छात्रावास',
      description:
        'सेवा भारती, गोरक्ष प्रांत, समाज के अनुसूचित जाति/जनजाति के छात्रों के उत्थान और सशक्तिकरण के लिए प्रतिबद्ध है। हमारा लक्ष्य उनकी क्षमता को जागृत करना और उन्हें आत्मनिर्भर और स्वाभिमानी नागरिक बनने के लिए आवश्यक कौशल और संसाधन प्रदान करना है। हमें सर्वश्रेष्ठ और प्रतिभाशाली लड़के और लड़कियों को खोजने और प्रशिक्षित करने की जिम्मेदारी लेने पर गर्व है जो हमारे देश के भविष्य के लिए पथप्रदर्शक बनेंगे। इसी क्रम में, सेवा भारती, गोरक्ष प्रांत ने 2016 से उत्तर प्रदेश के आर्यमगढ़ (आजमगढ़) के तरवां में एक छात्रावास शुरू किया है।',
    },
  };

 
  
const campaignImages = [
  adolscentdevelopment,
   nutrition,
  disastermanagment
 ];
  const campaignTexts = {
    en: [
      'Adolescent development',
      'Proper nutrition (Suposhan Bharat)',
      'Disaster management',
    ],
    hi: ['किशोरी विकास', 'सुपोषण भारत', 'आपदा प्रबंधन'],
  };

  return (
    <div className="home-container" id="hero-section">
      <HeroSection languageType={languageType} />

      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }}  id="sector-section">
        {languageType === 'hi'
          ? 'सेवा भारती के प्रमुख आयाम'
          : 'Sewa Bharti Sectors'}
      </h2>
      <SewaBhartiSections languageType={languageType} />
      <ServiceMessage languageType={languageType} />

      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }} id="activity-section">
        {languageType === 'hi'
          ? 'सेवा भारती के कार्य'
          : 'Sewa Bharti Activities'}
      </h2>
      <CarouselWithText
        images={imageArray1}
        position="left"
        content={content1}
        languageType={languageType}
      />
      <CarouselWithText
        images={imageArray2}
        position="right"
        content={content2}
        languageType={languageType}
      />

      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }} id="campaign-section">
        {languageType === 'hi' ? 'अभियान' : 'Campaign'}
      </h2>
      <ImageCarouselWithText
        images={campaignImages}
        texts={campaignTexts[languageType]}
        autoplaySpeed={4000}
      />

      <Footer languageType={languageType}/>
    </div>
  );
}

export default Home;
