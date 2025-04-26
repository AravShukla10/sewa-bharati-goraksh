import React from 'react';
import HeroSection from './HeroSection';
import SewaBhartiSections from './SewaBhartiSections';
import ServiceMessage from './ServiceMessage';
import CarouselWithText from './CarouselWithText';
import ImageCarouselWithText from './ImageCarouselWithText';
import Footer from './Footer';

// Static imports for campaign section
import nutrition from '../images/nutrition.webp';
import disastermanagment from '../images/disastermanagment.webp';
import adolscentdevelopment from '../images/adolscentdevelopment.webp';

// Dynamically import all images from nanaji and hostel folders
const importAll = (r) =>
  r.keys()
    .sort() // sort files by name like 1.webp, 2.webp etc.
    .map((key) => ({
      src: r(key),
      alt: key.replace('./', '').replace(/\..+$/, ''),
    }));

const nanajiImages = importAll(require.context('../images/nanaji', false, /\.(png|jpe?g|webp|svg)$/));
const hostelImages = importAll(require.context('../images/hostel', false, /\.(png|jpe?g|webp|svg)$/));

function Home({ languageType, setActiveScreen }) {
  const content1 = {
    en: {
      title: 'Nanaji Deshmukh Training Institute',
      description: `The Nanaji Deshmukh Project is a visionary initiative by Sewa Bharti Goraksh Prant, aimed at not only developing skills among the poor, deprived, neglected, and economically weaker sections but also providing them with meaningful employment opportunities.
      
      The project is conceptualized and inspired by the remarkable social and educational work of Nanaji Deshmukh (Chandikadas Amritdas Deshmukh), who was honored with the Bharat Ratna in 2019. 
    
      As a dedicated pracharak of the Rashtriya Swayamsevak Sangh, Nanaji strongly opposed the British-imposed Macaulay education system and worked from the land of Gorakhnath to foster an "Indian generation with cultural values." He established the first Saraswati Shishu Mandir at Pakki Bagh, Gorakhpur, pioneering the concept of *education with values* across India.
    
      Inspired by Nanaji’s vision, the "Nanaji Deshmukh Training Institute" was launched again from Gorakshanath's land in 2021, carrying forward the dream of uplifting India's poor, deprived, neglected, and economically weaker communities.`,
    },
    hi: {
      title: 'नाना जी देशमुख प्रशिक्षण संस्थान',
      description: `नाना जी देशमुख प्रकल्प, सेवा भारती गोरक्षप्रान्त की एक स्वर्णिम परिकल्पना है, जिसका उद्देश्य गरीब, वंचित, उपेक्षित एवं आर्थिक रूप से कमजोर भाई-बहनों में न केवल कौशल का विकास करना है, बल्कि उन्हें रोजगार के अवसर भी प्रदान करना है।
    
    इस प्रकल्प की संकल्पना नाना जी देशमुख (पूरा नाम: चंडिका दास अमृतदास देशमुख) के अद्भुत सामाजिक एवं रचनात्मक सेवा कार्यों से प्रेरित होकर की गई है, जिन्हें 2019 में भारत रत्न से सम्मानित किया गया था।
    
    नाना जी ने 1952 में गोरखनाथ की पावन धरती से राष्ट्रीय स्वयंसेवक संघ के प्रचारक के रूप में कार्य करते हुए, अंग्रेजों द्वारा थोपी गई मैकाले की शिक्षा पद्धति का विरोध किया और संस्कारयुक्त भारतीय पीढ़ी के निर्माण हेतु 'सरस्वती शिशु मन्दिर' (पक्की बाग, गोरखपुर) की स्थापना की। बाद में यह शिशु मन्दिर विद्यालय आंदोलन पूरे देश में फैल गया।
    
    इन्हीं प्रेरणास्रोत विचारों से प्रेरित होकर, 2021 में गोरक्षनाथ की भूमि से 'नाना जी देशमुख प्रशिक्षण संस्थान' की शुरुआत की गई। हमारा सपना है कि यह प्रकल्प सम्पूर्ण भारतवर्ष में गरीब, वंचित, उपेक्षित एवं आर्थिक रूप से कमजोर समाज के उत्थान हेतु स्थान-स्थान पर संचालित हो।`,
    },
  };

  const content2 = {
    en: {
      title: "Hostel for Students - Harishchandra Seva Kendra (Tarwan, Aryamgarh)",
      description: `Under the successful efforts of Rashtriya Seva Bharti and the coordination of Seva Bharti, Goraksh Prant, on February 22, 2019, a registry of around 25 bighas of land was carried out by the then Rajya Sabha MP, Shri Amar Singh Ji, for service activities at his village, Tarwan, Aryamgarh (Azamgarh), where a haveli (mansion) was built in 8 bighas of land. The haveli is surrounded by a wall for security purposes. It includes 8 rooms, 2 large halls, 2 dining halls, and 2 kitchens, all well-equipped. A beautiful temple was also built in the premises for regular worship, with statues of Mata Rani and Bhole Nath.
      
Seva Bharti planned to initiate an excellent service project in this donated space to assist the poor, disadvantaged, helpless, and economically backward people in the region in every possible way. As part of this initiative, the project was named "Harishchandra Seva Kendra" in honor of the late Amar Singh Ji's father.

"Harishchandra Seva Kendra" was inaugurated on August 5, 2019, by Shri Ajit Mahapatra, a senior pracharak (campaigner) from the Rashtriya Swayamsevak Sangh (RSS).

To ensure the successful operation of this service center, a committee of 21 prominent local individuals was formed, which will oversee the successful functioning of the service projects running in this center.

The committee, keeping in mind the caste structure, illiteracy, and poverty of the region, decided to open a hostel for the children of the poor, marginalized, and economically weak families, most of whom belong to the Musahar, Dharikar, Rajbhar, and Harijan castes. This hostel is currently operational and has been a great success.

The hostel began with proper accommodation for 30 students, and there are plans to expand it to accommodate 100 students, with work ongoing. Currently, all the hostel students are enrolled in the Saraswati Shishu Mandir School for their education. Two regular staff members and a center head have been appointed for the management of the hostel. The center is located opposite Tarwan police station in the Lalganj Tehsil of Aryamgarh (Azamgarh) district, approximately 70 kilometers away from Aryamgarh.

This project is a golden initiative by Seva Bharti, which is working tirelessly to bring the poor, marginalized, and helpless people of the society into the mainstream, helping them lead a dignified life.`,
    },
    hi: {
      title: 'छात्रावास - *हरिशचन्द्र सेवा केन्द्र (तरवां, आर्यमगढ़)',
      description: `राष्ट्रीय सेवा भारती के सफल प्रयास एवं सेवा भारती, गोरक्षप्रान्त के संयोजकत्व में दिनांक 22 फरवरी 2019 को तत्कालीन राज्य सभा के सांसद श्री अमर सिंह जी द्वारा, उनके अपने गाँव तरवां, आर्यमगढ़ (आजमगढ़) की लगभग 25 बिस्सा जमीन जिसके 8 विस्सा में एक हवेली निर्मित है, राष्ट्रीय सेवा भारती को सेवा कार्य हेतु रजिस्ट्री की गई।
      
दान प्राप्त हवेली के चारों तरफ सुरक्षा के दृष्टि से दिवाल है। इस हवेली में सभी सुविधाओं से युक्त 8 कमरे 2 बड़े हाल, 2 डाइनिंग हाल, 2 रसोई घर है। इस परिसर में नियमित पूजा अर्चन हेतु सुन्दर मन्दिर का निर्माण कराया गया है। जिसमें माता रानी एवं भोले नाथ की प्रतिमा है।

सेवा भारती ने इस दान प्राप्त परिसर में एक उत्कृष्ठ सेवा प्रकल्प खोलने की योजना बनाई, जिससे क्षेत्र के गरीब, वंचित, असहाय एवं आर्थिक दृष्टि से पिछड़े लोगों की हर सम्भव सहायता की जा सके। इसी कड़ी में इस प्रकल्प का नाम स्व० अमर सिंह जी के पिता जी के नाम पर " हरिश्चन्द्र सेवा केन्द्र" रखने का प्रस्ताव पारित हुआ।

 "हरिश्चन्द्र सेवा केन्द्र" का शुभारम्भ दिनांक 5 अगस्त 2019 को राष्ट्रीय स्वयंसेवक संघ के वरिष्ट प्रचारक श्री अजीत महापात्र जी द्वारा किया गया।

इस सेवा केन्द्र के सफल संचालन हेतु स्थानिय 21 प्रमुख व्यक्तियों की एक समिति बनाई गई जो इस सेवा केन्द्र में चलने वाले सेवा प्रकल्पों की चिंता करते हुए उसके सफल संचालन की योजना तैयार करेगी।

समिति ने क्षेत्र की जाति संरचना निरक्षरता एवं गरीबी को देखते हुए इस सेवा केन्द्र पर गरीब वंचित एवं आर्थिक दृष्टि से कमजोर परिवार के बच्चों जिसमें ज्यादातर मुसहर, धरिकार, राजभर व हरिजन जाति के हैं, उनके पढ्ने एवं रहने के लिए छात्रावास खोलने की योजना बनायी गई। जो आज सफलता पूर्वक संचालित हो रहा है।

इस छात्रावास में 30 छात्रों के रहने की सम्मुचित व्यवस्था के साथ शुरू किया गया। जिसको आवश्यकता अनुसार 100 छात्रों के लिए करने की योजना है, जिसका कार्य जारी है।
वर्तमान में छात्रावास के सभी छात्रों को पढ़ने हेतु प्रवेश पास के सरस्वती शिशु मन्दिर विद्यालय में कराया गया है। छात्रावास के नियमित व्यवस्था के लिए 2 नियमित कर्मचारी एवं केन्द्र प्रमुख की नियुक्ती की गई है। यह केन्द्र आर्यमगढ़ (आजमगढ़) जिले के लालगंज तहसील में तरवां थाने के सामने स्थित है। यहाँ से आयर्मगढ़ की दूरी 70 कि० मी० है।

यह प्रकल्प सेवाभारती का एक स्वर्णिम प्रकल्प है, जिसके द्वारा समाज के गरीब वचित एवं असहाय लोगो को समाज की मुख्य धारा में ले आने एवं उनके सम्मानित जीवन जीने में हर सम्भव प्रयास किया जा रहा है।`,
    },
  };

  const campaignImages = [adolscentdevelopment, nutrition, disastermanagment];
  const campaignTexts = {
    en: ['Adolescent development', 'Proper nutrition (Suposhan Bharat)', 'Disaster management'],
    hi: ['किशोरी विकास', 'सुपोषण भारत', 'आपदा प्रबंधन'],
  };

  return (
    <div className="home-container" id="hero-section">
      <HeroSection languageType={languageType} />
      <ServiceMessage languageType={languageType} />
      
      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }} id="sector-section">
        {languageType === 'hi' ? 'सेवा भारती के प्रमुख आयाम' : 'Sewa Bharti Sectors'}
      </h2>
      <SewaBhartiSections languageType={languageType} setActiveScreen={setActiveScreen} />

      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }} id="activity-section">
        {languageType === 'hi' ? 'सेवा भारती के कार्य' : 'Sewa Bharti Activities'}
      </h2>
      <CarouselWithText
        images={nanajiImages}
        position="left"
        content={content1}
        languageType={languageType}
      />
      <CarouselWithText
        images={hostelImages}
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

      {/* <Footer /> optional */}
    </div>
  );
}

export default Home;
