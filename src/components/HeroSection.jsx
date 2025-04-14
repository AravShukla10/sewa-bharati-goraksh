import React from 'react';
import './styles/HeroSection.css';

const HeroSection = ({ languageType }) => {
  const content = {
    en: {
      title: "Sewa Bharati Goraksh",
      subtitle: "Serving with dedication, compassion, and trust",
      paragraph1: "Rashtriya Swayamsevak Sangh is working towards bringing the nation to the pinnacle of glory by uniting the entire Hindu society, but still the deprived, afflicted, neglected and deprived sections of the Hindu society are far away from us. Anti-national forces use them as their weapon.",
      paragraph2: "With this in mind, the Sangh has created Seva Vibhag and Seva Bharti and is working to bring them closer to itself through service and connect them with the mainstream of the nation.",
      paragraph3: "Sewa Bharti is a service organization run by volunteers. Sewa Bharti exclusively works in the place of Sewa Basti where the deprived, suffering, neglected, poor and economically backward society lives.",
      cta: "Join Our Mission"
    },
    hi: {
      title: "सेवा भारती गोरक्ष",
      subtitle: "समर्पण, करुणा और विश्वास के साथ सेवा",
      paragraph1: "राष्ट्रीय स्वयंसेवक संघ संपूर्ण हिंदू समाज को एकजुट करके राष्ट्र को गौरव के शिखर पर पहुंचाने की दिशा में कार्य कर रहा है, परन्तु अभी भी हिंदू समाज के वंचित, पीड़ित, उपेक्षित और वंचित वर्ग हमसे दूर हैं। राष्ट्र विरोधी शक्तियां उन्हें अपने हथियार के रूप में उपयोग करती हैं।",
      paragraph2: "इसी को ध्यान में रखते हुए संघ ने सेवा विभाग और सेवा भारती का निर्माण किया है और सेवा के माध्यम से उन्हें अपने करीब लाने और राष्ट्र की मुख्यधारा से जोड़ने का कार्य कर रहा है।",
      paragraph3: "सेवा भारती स्वयंसेवकों द्वारा संचालित एक सेवा संगठन है। सेवा भारती विशेष रूप से सेवा बस्ती में कार्य करती है जहां वंचित, पीड़ित, उपेक्षित, गरीब और आर्थिक रूप से पिछड़ा समाज रहता है।",
      cta: "हमारे मिशन से जुड़ें"
    }
  };

  const currentContent = languageType === 'hi' ? content.hi : content.en;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{currentContent.title}</h1>
        <p className="subtitle">{currentContent.subtitle}</p>
        <div className="mission-text">
          <p>{currentContent.paragraph1}</p>
          <p>{currentContent.paragraph2}</p>
          <p>{currentContent.paragraph3}</p>
        </div>
        <button className="cta-button">{currentContent.cta}</button>
      </div>
    </section>
  );
};

export default HeroSection;