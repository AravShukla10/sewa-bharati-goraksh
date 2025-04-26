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



function Home({ languageType , setActiveScreen}) {
  const imageArray1 = [img1, img2, img3, img4, img5];
  const imageArray2 = [img6, img7, img8, img9, img10];

  const content1 = {
    en: {
      title: 'Nanaji Deshmukh Training Institute',
      description:
        'Nanaji Deshmukh Project is a golden concept of Sewa Bharti Gorakhsh Prant, whose aim is not only to develop skills among the poor, deprived, neglected and economically weak brothers and sisters but also to provide them employment. The project is conceptualised and inspired by the remarkable social and creative service works of Nanaji Deshmukh, whose full name was Chandikadas Amritdas Deshmukh and was awarded the Bharat Ratna in 2019. Nana ji forcefully denied the education system of Macaulay imposed by the British while being a Pracharak of the Rashtriya Swayamsevak Sangh from this land of Gorakhnath, for the creation of an "Indian generation with rituals". He started the first education center, Saraswati Shishu Mandir, Pakki Bagh, Gorakhpur. Later, this Shishu Mandir School concept spread across India to provide education with rituals. Inspired by this noble idea of Nana ji, this project was started again in the name of "Nanaji Deshmukh" from the land of Gorakshanath in 2021 with the dream of uplifting the poor, deprived, neglected and economically weaker society across India.',
    },
    hi: {
      title: 'नाना जी देशमुख प्रशिक्षण संस्थान',
      description:
        'नाना जी देशमुख प्रकल्प, सेवा भारती गोरक्षप्रान्त की एक स्वर्णिम परिकल्पना है, जिसका उद्देश्य गरीब, वंचित, उपेक्षित एवं आर्थिक दृष्टि से कमजोर भाई-बहनों में केवल कौशल का विकास करना ही नहीं वरन् उन्हें रोजगार भी दिलाना है। इस प्रकल्प की परिकल्पना नाना जी देशमुख (चंडिका दास अमृतदास देशमुख) के अद्भुत सामाजिक एवं रचनात्मक सेवा कार्यों से प्रेरित होकर की गई है। उन्हें 2019 में भारत रत्न से सम्मानित किया गया। नाना जी ने गोरखनाथ की भूमि से राष्ट्रीय स्वयंसेवक संघ के प्रचारक रहते हुए अंग्रेजों द्वारा थोपी गई मैकाले की शिक्षा पद्धति का विरोध करते हुए संस्कार युक्त भारतीय पीढ़ी के निर्माण हेतु प्रथम शिक्षा केन्द्र सरस्वती शिशु मन्दिर, पक्की बाग, गोरखपुर की स्थापना की। बाद में शिशु मन्दिर विद्यालय संपूर्ण भारत में संस्कार युक्त शिक्षा देने का माध्यम बन गए। नाना जी के इस विचार से प्रेरित होकर, 2021 में गोरक्षनाथ की धरती से "नाना जी देशमुख" के नाम से इस प्रकल्प की शुरुआत की गई जिसका सपना है कि भारत के गरीब, वंचित, उपेक्षित और कमजोर वर्ग का उत्थान हो।',
    },
  };
  

  const content2 = {
    en: {
      title: "Hostel for Students - Harishchandra Seva Kendra (Tarwan, Aryamgarh)",
  description: `Under the successful efforts of Rashtriya Seva Bharti and the coordination of Seva Bharti, Goraksh Prant, on February 22, 2019, a registry of around 25 bighas of land was carried out by the then Rajya Sabha MP, Shri Amar Singh Ji, for service activities at his village, Tarwan, Aryamgarh (Azamgarh), where a haveli (mansion) was built in 8 bighas of land. The haveli is surrounded by a wall for security purposes. It includes 8 rooms, 2 large halls, 2 dining halls, and 2 kitchens, all well-equipped. A beautiful temple was also built in the premises for regular worship, with statues of Mata Rani and Bhole Nath.

Seva Bharti planned to initiate an excellent service project in this donated space to assist the poor, disadvantaged, helpless, and economically backward people in the region in every possible way.`
},
    hi: {
      title: 'छात्रावास - हरिशचन्द्र सेवा केन्द्र (तरवां, आर्यमगढ़)',
      description:
        'राष्ट्रीय सेवा भारती के सफल प्रयास एवं सेवा भारती, गोरक्षप्रान्त के संयोजकत्व में दिनांक 22 फरवरी 2019 को तत्कालीन राज्य सभा के सांसद श्री अमर सिंह जी द्वारा, उनके अपने गाँव तरवां, आर्यमगढ़ (आजमगढ़) की लगभग 25 बिस्सा जमीन जिसके 8 विस्सा में एक हवेली निर्मित है, राष्ट्रीय सेवा भारती को सेवा कार्य हेतु रजिस्ट्री की गई।\nदान प्राप्त हवेली के चारों तरफ सुरक्षा के दृष्टि से दिवाल है। इस हवेली में सभी सुविधाओं से युक्त 8 कमरे 2 बड़े हाल, 2 डाइनिंग हाल, 2 रसोई घर है। इस परिसर में नियमित पूजा अर्चन हेतु सुन्दर मन्दिर का निर्माण कराया गया है। जिसमें माता रानी एवं भोले नाथ की प्रतिमा है।\n\nसेवा भारती ने इस दान प्राप्त परिसर में एक उत्कृष्ठ सेवा प्रकल्प खोलने की योजना बनाई, जिससे क्षेत्र के गरीब, वंचित, असहाय एवं आर्थिक दृष्टि से पिछड़े लोगों की हर सम्भव सहायता की जा सके। ',
    },
  };
  const content3en=`This project began in a rented house with about 900 square feet of space on the ground floor in the Dawoodpur area of Gorakhpur. It was inaugurated by respected Mr. Anil ji, Kshetra Pracharak, Eastern Uttar Pradesh, on 10 October 2021. There is a plan to provide many skill trainings to the needy for their upliftment. Initially, various types of training are being provided for making designer clothes, with separate batches for men and women. Highly qualified experts have been recruited for training. About 300 trainees have completed their training so far, and many are operating their own clothing businesses or working in garment factories and tailoring shops. This project aims to secure garment orders for the trained trainees to earn and uplift their lifestyles and support their families. Presently, school uniforms for one or two schools are being made by reputed traders. Further, the Uttar Pradesh government is planning to create a garment hub in Gorakhpur Industrial Area (GIDA), where thousands of trained individuals will be needed in the future, ensuring employment opportunities. Keeping this in mind, maximum textile training is being provided. There are also plans to provide training in other fields like mobile repairing, fridge, and A.C. repairing from this center in the coming days.`;
   const content3hi=`यह प्रकल्प गोरखपुर के दाऊदपुर क्षेत्र में एक किराये के मकान के भूतल पर लगभग 900 वर्गफीट क्षेत्र में प्रारंभ हुआ। इसका उद्घाटन 10 अक्टूबर 2021 को आदरणीय श्री अनिल जी, क्षेत्र प्रचारक, पूर्वी उत्तर प्रदेश ने किया। इस केन्द्र पर विभिन्न प्रकार के कौशल प्रशिक्षण देने की योजना है। प्रारंभ में, डिज़ाइनर वस्त्र निर्माण के लिए प्रशिक्षण शुरू किया गया, जिसमें महिलाओं और पुरुषों के लिए अलग-अलग बैच बनाए गए हैं। उच्च योग्य प्रशिक्षकों की नियुक्ति की गई है। अभी तक लगभग 300 प्रशिक्षार्थी प्रशिक्षण प्राप्त कर चुके हैं, जिनमें से कई ने स्वयं का वस्त्र व्यवसाय शुरू किया है या गारमेंट फैक्ट्री और टेलरिंग दुकानों में कार्यरत हैं। इस प्रकल्प का उद्देश्य प्रशिक्षार्थियों को सिलाई एवं वस्त्र निर्माण के ऑर्डर दिलाकर उनके जीवनस्तर को सुधारना और परिवार का सहारा बनाना है। वर्तमान में समाज के प्रतिष्ठित व्यापारियों द्वारा एक-दो विद्यालयों के बच्चों के ड्रेस निर्माण का कार्य किया जा रहा है। भविष्य में गोरखपुर औद्योगिक क्षेत्र (GIDA) में गारमेंट हब बनने की योजना है, जहाँ हजारों प्रशिक्षित व्यक्तियों की आवश्यकता होगी। इसे ध्यान में रखते हुए अधिक से अधिक वस्त्र निर्माण प्रशिक्षण दिया जा रहा है। आने वाले दिनों में इस केन्द्र से मोबाइल रिपेयरिंग, फ्रिज, एसी रिपेयरिंग आदि रोजगारपरक क्षेत्रों में भी प्रशिक्षण देने की योजना है।`;
 const content4en=` As part of this initiative, the project was named "Harishchandra Seva Kendra" in honor of the late Amar Singh Ji's father.

"Harishchandra Seva Kendra" was inaugurated on August 5, 2019, by Shri Ajit Mahapatra, a senior pracharak (campaigner) from the Rashtriya Swayamsevak Sangh (RSS).

To ensure the successful operation of this service center, a committee of 21 prominent local individuals was formed, which will oversee the successful functioning of the service projects running in this center.

The committee, keeping in mind the caste structure, illiteracy, and poverty of the region, decided to open a hostel for the children of the poor, marginalized, and economically weak families, most of whom belong to the Musahar, Dharikar, Rajbhar, and Harijan castes. This hostel is currently operational and has been a great success.

The hostel began with proper accommodation for 30 students, and there are plans to expand it to accommodate 100 students, with work ongoing. Currently, all the hostel students are enrolled in the Saraswati Shishu Mandir School for their education. Two regular staff members and a center head have been appointed for the management of the hostel. The center is located opposite Tarwan police station in the Lalganj Tehsil of Aryamgarh (Azamgarh) district, approximately 70 kilometers away from Aryamgarh.

This project is a golden initiative by Seva Bharti, which is working tirelessly to bring the poor, marginalized, and helpless people of the society into the mainstream, helping them lead a dignified life.`;

  const content4hi=`इसी कड़ी में इस प्रकल्प का नाम स्व० अमर सिंह जी के पिता जी के नाम पर " हरिश्चन्द्र सेवा केन्द्र" रखने का प्रस्ताव पारित हुआ।\n\n "हरिश्चन्द्र सेवा केन्द्र" का शुभारम्भ दिनांक 5 अगस्त 2019 को राष्ट्रीय स्वयंसेवक संघ के वरिष्ट प्रचारक श्री अजीत महापात्र जी द्वारा किया गया।\n\nइस सेवा केन्द्र के सफल संचालन हेतु स्थानिय 21 प्रमुख व्यक्तियों की एक समिति बनाई गई जो इस सेवा केन्द्र में चलने वाले सेवा प्रकल्पों की चिंता करते हुए उसके सफल संचालन की योजना तैयार करेगी।\n\nसमिति ने क्षेत्र की जाति संरचना निरक्षरता एवं गरीबी को देखते हुए इस सेवा केन्द्र पर गरीब वंचित एवं आर्थिक दृष्टि से कमजोर परिवार के बच्चों जिसमें ज्यादातर मुसहर, धरिकार, राजभर व हरिजन जाति के हैं, उनके पढ्ने एवं रहने के लिए छात्रावास खोलने की योजना बनायी गई। जो आज सफलता पूर्वक संचालित हो रहा है।\n\nइस छात्रावास में 30 छात्रों के रहने की सम्मुचित व्यवस्था के साथ शुरू किया गया। जिसको आवश्यकता अनुसार 100 छात्रों के लिए करने की योजना है, जिसका कार्य जारी है।\nवर्तमान में छात्रावास के सभी छात्रों को पढ़ने हेतु प्रवेश पास के सरस्वती शिशु मन्दिर विद्यालय में कराया गया है। छात्रावास के नियमित व्यवस्था के लिए 2 नियमित कर्मचारी एवं केन्द्र प्रमुख की नियुक्ती की गई है। यह केन्द्र आर्यमगढ़ (आजमगढ़) जिले के लालगंज तहसील में तरवां थाने के सामने स्थित है। यहाँ से आयर्मगढ़ की दूरी 70 कि० मी० है।\n\nयह प्रकल्प सेवाभारती का एक स्वर्णिम प्रकल्प है, जिसके द्वारा समाज के गरीब वचित एवं असहाय लोगो को समाज की मुख्य धारा में ले आने एवं उनके सम्मानित जीवन जीने में हर सम्भव प्रयास किया जा रहा है।`;
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
      <ServiceMessage languageType={languageType} />
      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }}  id="sector-section">
        {languageType === 'hi'
          ? 'सेवा भारती के प्रमुख आयाम'
          : 'Sewa Bharti Sectors'}
      </h2>
      <SewaBhartiSections languageType={languageType} setActiveScreen={setActiveScreen} />
      

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
     <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'justify' ,margin:'1.1rem',  padding: '0 2rem' }}>{languageType === 'hi'?content3hi:content3en}</p>
      <CarouselWithText
        images={imageArray2}
        position="right"
        content={content2}
        languageType={languageType}
      />
     <p style={{ 
  fontSize: '1.1rem', 
  lineHeight: '1.6', 
  textAlign: 'justify', 
  padding: '0 2rem' // <-- padding added here
}}>
  {languageType === 'hi' ? content4hi : content4en}
</p>

      <h2 style={{ textAlign: 'center', marginTop: '2rem', fontSize: '2rem' }} id="campaign-section">
        {languageType === 'hi' ? 'अभियान' : 'Campaign'}
      </h2>
      <ImageCarouselWithText
        images={campaignImages}
        texts={campaignTexts[languageType]}
        autoplaySpeed={4000}
      />

     
    </div>
  );
}

export default Home;
