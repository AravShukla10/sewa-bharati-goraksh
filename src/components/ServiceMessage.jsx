import React from 'react';
import './styles/ServiceMessage.css';

const ServiceMessage = ({ languageType }) => {
  const content = {
    en: {
      heading: 'Serving the Nation is Serving God',
      paragraph1: `In Indian culture, the only way to establish oneness with the divine is to serve the nation. Service destroys ego and begins the practice of Omkar. Service is life, service is dedication, and living for the awakening of harmony and brotherhood in society is the Aarti philosophy.`,
      paragraph2: `Seeing our deprived, suffering, neglected, and needy society and making their life happy through our service work and bringing them into the mainstream of society is the true divine service. This is the message given by Lord Rama and Krishna through their lives. Let us implement this in our lives.`,
      paragraph3: `Nature also inspires us to serve. Sun, water, wind, trees, earth, everything always gives the message of giving. The country gives us everything, we should also learn to give something, taking inspiration from this, we can experience ultimate happiness by making our lives meaningful through service.`,
      paragraph4: `In Hindu tradition, it is believed that by donating for the upliftment of the poor and helpless, Goddess Lakshmi herself comes to the person and he always remains happy, healthy, and long-lived.`,
      categories: [
        { title: 'Category 1: Upliftment', description: 'Making efforts so that the person who is served today becomes self-reliant, self-respecting, and serves others tomorrow.' },
        { title: 'Category 2: Empowerment', description: 'Removing the needs of the suffering and deprived people, making them self-reliant and self-respecting.' },
        { title: 'Category 3: Immediate Relief', description: 'Providing food, water, medicine, and education to the needy.' }
      ],
    },
    hi: {
      heading: 'राष्ट्र की सेवा ही प्रभु सेवा है',
      paragraph1: `भारतीय संस्कृति में परमात्मतत्व के साथ तादाम्य स्थापित करने का एकमेव मार्ग राष्ट्र की सेवा है। सेवा से अहंकार नष्ट होता है और ओंकार की साधना प्रारम्भ होती है। सेवा ही जीवन है, सेवा ही समर्पण है और समाज में समरसता एवं बन्धुता के भाव जागरण हेतु जीना यही आरतीय दर्शन है।`,
      paragraph2: `अपने वंचित, पीड़ित, उपेक्षित और अभावग्रस्त समाज का दर्शन कर अपने सेवा कार्यों से उनके जीवन को सुखद बनाते हुए समाज की मुख्य धारा में लाना ही सच्ची ईश्वरीय सेवा है। यही प्रभु राम और कृष्ण ने अपने जीवन से संदेश दिया। आइये हम अपने जीवन में इसे चरितार्थ करें।`,
      paragraph3: `प्रकृति भी हमें सेवा करने की प्रेरणा देती है, सूर्य, जल, पवन, पेड़, पृथ्वी सब कुछ सदैव देने का ही संदेश देते हैं। देश हमें देता है सब कुछ, हम भी तो कुछ देना सीखें, से प्रेरणा लेते हुए सेवा द्वारा हम अपने जीवन को सार्थक करते हुए परम सुख की अनुभूति कर सकते हैं।`,
      paragraph4: `हिन्दू संस्कार में ऐसा मानना है कि गरीबों और असहाय के उत्थान के लिए दान देने से व्यक्ति के पास लक्ष्मी खुद चल कर आती हैं और वह हमेशा प्रसन्न, निरोग और दीर्घायु होता है।`,
      categories: [
        { title: 'प्रथम श्रेणी: उत्थान', description: 'आज का सेवित (सेवा लेने वाला व्यक्ति) स्वावलम्बी, स्वाभिमानी बनकर कल दूसरों की सेवा करने वाला बने, ऐसा प्रयास करने को प्रथम श्रेणी कहा गया है।' },
        { title: 'द्वितीय श्रेणी: सशक्तिकरण', description: 'पीड़ित, वंचित लोगों का आभाव दूर करते-करते उनके स्वावलम्बी एवं स्वाभिमानी बनाने को द्वितीय श्रेणी कहा गया है।' },
        { title: 'तृतीय श्रेणी: तात्कालिक राहत', description: 'किसी अभावग्रस्थ व्यक्ति का आभाव दूर करना, जैसे भूखे को अन्न देना, प्यासे को पानी देना, बीमार को दवा देना, निरक्षर को शिक्षा देना, इसे तृतीय श्रेणी में रखा गया है।' }
      ],
    },
  };

  return (
    <div className="service-message">
      <div className="heading-section">
        <h1>{content[languageType].heading}</h1>
      </div>

      <div className="service-content">
        <p>{content[languageType].paragraph1}</p>
        <p>{content[languageType].paragraph2}</p>
        <p>{content[languageType].paragraph3}</p>
        <p>{content[languageType].paragraph4}</p>
      </div>

      <div className="service-categories">
        {content[languageType].categories.map((category, index) => (
          <div className="category" key={index}>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMessage;
