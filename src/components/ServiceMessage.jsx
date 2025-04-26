import React from "react";
import "./styles/ServiceMessage.css";

const ServiceMessage = ({ languageType }) => {
  const content = {
    en: {
      heading: "About Us",
      paragraphs: [
        `Rashtriya Swayamsevak Sangh is working towards bringing the nation to the pinnacle of glory by uniting the entire Hindu society, but still the deprived, afflicted, neglected and deprived sections of the Hindu society are far away from us. Anti-national forces use them as their weapon. With this in mind, the Sangh has created Seva Vibhag and Seva Bharti and is working to bring them closer to itself through service and connect them with the mainstream of the nation. Sewa Bharti is a service organization run by volunteers. Sewa Bharti exclusively works in the place of Sewa Basti where the deprived, suffering, neglected, poor and economically backward society lives.`,
        `Serving the Nation is Serving God. In Indian culture, the only way to establish oneness with the divine is to serve the nation. Service destroys ego and begins the practice of Omkar. Service is life, service is dedication, and living for the awakening of harmony and brotherhood in society is the Aarti philosophy.`,
        `Seeing our deprived, suffering, neglected, and needy society and making their life happy through our service work and bringing them into the mainstream of society is the true divine service. This is the message given by Lord Rama and Krishna through their lives. Let us implement this in our lives.`,
        `Nature also inspires us to serve. Sun, water, wind, trees, earth, everything always gives the message of giving. The country gives us everything, we should also learn to give something, taking inspiration from this, we can experience ultimate happiness by making our lives meaningful through service.`,
        `In Hindu tradition, it is believed that by donating for the upliftment of the poor and helpless, Goddess Lakshmi herself comes to the person and he always remains happy, healthy, and long-lived.`,
      ],
      categories: [
        {
          title: "Category 1: Upliftment",
          description:
            "Making efforts so that the person who is served today becomes self-reliant, self-respecting, and serves others tomorrow.",
        },
        {
          title: "Category 2: Empowerment",
          description:
            "Removing the needs of the suffering and deprived people, making them self-reliant and self-respecting.",
        },
        {
          title: "Category 3: Immediate Relief",
          description:
            "Providing food, water, medicine, and education to the needy.",
        },
      ],
    },
    hi: {
      heading: "हमारे बारे में",
      paragraphs: [
        `राष्ट्रीय स्वयंसेवक संघ, सम्पूर्ण हिन्दू समाज को संगठित कर राष्ट्र को परम वैभव पर लाने का कार्य कर रहा है, परंतु अभी भी हिन्दू समाज का वंचित, पीड़ित, उपेक्षित और अभावग्रस्त समाज हमसे दूर है। राष्ट्र विरोधी शक्तियाँ इन्हीं को अपना अस्त्र बनाती है। इसी दृष्टि से संघ ने सेवा विभाग एवं सेवा भारती की रचना कर सेवा के माध्यम से इन्हें अपने समीप लाते हुए, राष्ट्र की मुख्य धारा से जोड़ने का कार्य कर रहा है। सेवा भारती स्वयंसेवकों द्वारा संचालित एक सेवा संगठन है। सेवा भारती विशेष रूप से सेवा बस्तियों में काम करती है जहाँ वंचित, पीड़ित, उपेक्षित, अभावग्रस्त, गरीब और आर्थिक रूप से पिछड़ा समाज रहता है।`,
        `राष्ट्र की सेवा ही प्रभु सेवा है। भारतीय संस्कृति में परमात्मतत्व के साथ तादाम्य स्थापित करने का एकमेव मार्ग राष्ट्र की सेवा है। सेवा से अहंकार नष्ट होता है और ओंकार की साधना प्रारम्भ होती है। सेवा ही जीवन है, सेवा ही समर्पण है और समाज में समरसता एवं बन्धुता के भाव जागरण हेतु जीना यही आरतीय दर्शन है।`,
        `अपने वंचित, पीड़ित, उपेक्षित और अभावग्रस्त समाज का दर्शन कर अपने सेवा कार्यों से उनके जीवन को सुखद बनाते हुए समाज की मुख्य धारा में लाना ही सच्ची ईश्वरीय सेवा है। यही प्रभु राम और कृष्ण ने अपने जीवन से संदेश दिया। आइये हम अपने जीवन में इसे चरितार्थ करें।`,
        `प्रकृति भी हमें सेवा करने की प्रेरणा देती है, सूर्य, जल, पवन, पेड़, पृथ्वी सब कुछ सदैव देने का ही संदेश देते हैं। देश हमें देता है सब कुछ, हम भी तो कुछ देना सीखें, से प्रेरणा लेते हुए सेवा द्वारा हम अपने जीवन को सार्थक करते हुए परम सुख की अनुभूति कर सकते हैं।`,
        `हिन्दू संस्कार में ऐसा मानना है कि गरीबों और असहाय के उत्थान के लिए दान देने से व्यक्ति के पास लक्ष्मी खुद चल कर आती हैं और वह हमेशा प्रसन्न, निरोग और दीर्घायु होता है।`,
      ],
      categories: [
        {
          title: "प्रथम श्रेणी: उत्थान",
          description:
            "आज का सेवित (सेवा लेने वाला व्यक्ति) स्वावलम्बी, स्वाभिमानी बनकर कल दूसरों की सेवा करने वाला बने, ऐसा प्रयास करने को प्रथम श्रेणी कहा गया है।",
        },
        {
          title: "द्वितीय श्रेणी: सशक्तिकरण",
          description:
            "पीड़ित, वंचित लोगों का आभाव दूर करते-करते उनके स्वावलम्बी एवं स्वाभिमानी बनाने को द्वितीय श्रेणी कहा गया है।",
        },
        {
          title: "तृतीय श्रेणी: तात्कालिक राहत",
          description:
            "किसी अभावग्रस्त व्यक्ति का आभाव दूर करना, जैसे भूखे को अन्न देना, प्यासे को पानी देना, बीमार को दवा देना, निरक्षर को शिक्षा देना, इसे तृतीय श्रेणी में रखा गया है।",
        },
      ],
    },
  };

  return (
    <div className="service-message">
      <div className="content-wrapper">
        <div className="heading-section">
          <h1>{content[languageType].heading}</h1>
          <div className="decorative-line"></div>
        </div>

        <div className="service-content">
          {content[languageType].paragraphs.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>

        <div className="service-categories">
          {content[languageType].categories.map((category, index) => (
            <div className={`category category-${index + 1}`} key={index}>
              <div className="category-icon">{index + 1}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMessage;
