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
      title: "Hostel for Students - Harishchandra Seva Kendra (Tarwan, Aryamgarh)",
  description: `Under the successful efforts of Rashtriya Seva Bharti and the coordination of Seva Bharti, Goraksh Prant, on February 22, 2019, a registry of around 25 bighas of land was carried out by the then Rajya Sabha MP, Shri Amar Singh Ji, for service activities at his village, Tarwan, Aryamgarh (Azamgarh), where a haveli (mansion) was built in 8 bighas of land. The haveli is surrounded by a wall for security purposes. It includes 8 rooms, 2 large halls, 2 dining halls, and 2 kitchens, all well-equipped. A beautiful temple was also built in the premises for regular worship, with statues of Mata Rani and Bhole Nath.

Seva Bharti planned to initiate an excellent service project in this donated space to assist the poor, disadvantaged, helpless, and economically backward people in the region in every possible way. As part of this initiative, the project was named "Harishchandra Seva Kendra" in honor of the late Amar Singh Ji's father.

"Harishchandra Seva Kendra" was inaugurated on August 5, 2019, by Shri Ajit Mahapatra, a senior pracharak (campaigner) from the Rashtriya Swayamsevak Sangh (RSS).

To ensure the successful operation of this service center, a committee of 21 prominent local individuals was formed, which will oversee the successful functioning of the service projects running in this center.

The committee, keeping in mind the caste structure, illiteracy, and poverty of the region, decided to open a hostel for the children of the poor, marginalized, and economically weak families, most of whom belong to the Musahar, Dharikar, Rajbhar, and Harijan castes. This hostel is currently operational and has been a great success.

The hostel began with proper accommodation for 30 students, and there are plans to expand it to accommodate 100 students, with work ongoing. Currently, all the hostel students are enrolled in the Saraswati Shishu Mandir School for their education. Two regular staff members and a center head have been appointed for the management of the hostel. The center is located opposite Tarwan police station in the Lalganj Tehsil of Aryamgarh (Azamgarh) district, approximately 70 kilometers away from Aryamgarh.

This project is a golden initiative by Seva Bharti, which is working tirelessly to bring the poor, marginalized, and helpless people of the society into the mainstream, helping them lead a dignified life.`
},
    hi: {
      title: 'छात्रावास - *हरिशचन्द्र सेवा केन्द्र (तरवां, आर्यमगढ़)',
      description:
        'राष्ट्रीय सेवा भारती के सफल प्रयास एवं सेवा भारती, गोरक्षप्रान्त के संयोजकत्व में दिनांक 22 फरवरी 2019 को तत्कालीन राज्य सभा के सांसद श्री अमर सिंह जी द्वारा, उनके अपने गाँव तरवां, आर्यमगढ़ (आजमगढ़) की लगभग 25 बिस्सा जमीन जिसके 8 विस्सा में एक हवेली निर्मित है, राष्ट्रीय सेवा भारती को सेवा कार्य हेतु रजिस्ट्री की गई।\nदान प्राप्त हवेली के चारों तरफ सुरक्षा के दृष्टि से दिवाल है। इस हवेली में सभी सुविधाओं से युक्त 8 कमरे 2 बड़े हाल, 2 डाइनिंग हाल, 2 रसोई घर है। इस परिसर में नियमित पूजा अर्चन हेतु सुन्दर मन्दिर का निर्माण कराया गया है। जिसमें माता रानी एवं भोले नाथ की प्रतिमा है।\n\nसेवा भारती ने इस दान प्राप्त परिसर में एक उत्कृष्ठ सेवा प्रकल्प खोलने की योजना बनाई, जिससे क्षेत्र के गरीब, वंचित, असहाय एवं आर्थिक दृष्टि से पिछड़े लोगों की हर सम्भव सहायता की जा सके। इसी कड़ी में इस प्रकल्प का नाम स्व० अमर सिंह जी के पिता जी के नाम पर " हरिश्चन्द्र सेवा केन्द्र" रखने का प्रस्ताव पारित हुआ।\n\n "हरिश्चन्द्र सेवा केन्द्र" का शुभारम्भ दिनांक 5 अगस्त 2019 को राष्ट्रीय स्वयंसेवक संघ के वरिष्ट प्रचारक श्री अजीत महापात्र जी द्वारा किया गया।\n\nइस सेवा केन्द्र के सफल संचालन हेतु स्थानिय 21 प्रमुख व्यक्तियों की एक समिति बनाई गई जो इस सेवा केन्द्र में चलने वाले सेवा प्रकल्पों की चिंता करते हुए उसके सफल संचालन की योजना तैयार करेगी।\n\nसमिति ने क्षेत्र की जाति संरचना निरक्षरता एवं गरीबी को देखते हुए इस सेवा केन्द्र पर गरीब वंचित एवं आर्थिक दृष्टि से कमजोर परिवार के बच्चों जिसमें ज्यादातर मुसहर, धरिकार, राजभर व हरिजन जाति के हैं, उनके पढ्ने एवं रहने के लिए छात्रावास खोलने की योजना बनायी गई। जो आज सफलता पूर्वक संचालित हो रहा है।\n\nइस छात्रावास में 30 छात्रों के रहने की सम्मुचित व्यवस्था के साथ शुरू किया गया। जिसको आवश्यकता अनुसार 100 छात्रों के लिए करने की योजना है, जिसका कार्य जारी है।\nवर्तमान में छात्रावास के सभी छात्रों को पढ़ने हेतु प्रवेश पास के सरस्वती शिशु मन्दिर विद्यालय में कराया गया है। छात्रावास के नियमित व्यवस्था के लिए 2 नियमित कर्मचारी एवं केन्द्र प्रमुख की नियुक्ती की गई है। यह केन्द्र आर्यमगढ़ (आजमगढ़) जिले के लालगंज तहसील में तरवां थाने के सामने स्थित है। यहाँ से आयर्मगढ़ की दूरी 70 कि० मी० है।\n\nयह प्रकल्प सेवाभारती का एक स्वर्णिम प्रकल्प है, जिसके द्वारा समाज के गरीब वचित एवं असहाय लोगो को समाज की मुख्य धारा में ले आने एवं उनके सम्मानित जीवन जीने में हर सम्भव प्रयास किया जा रहा है।',
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

     
    </div>
  );
}

export default Home;
