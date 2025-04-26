import React from "react";
import "./styles/Education.css";

const Education = ({ languageType }) => {
    const content = {
      en: {
        heading: "Social Dimension",
        columns: [
          {
            title: "Social Service Initiatives",
            items: [
              "Family Guidance (Meetings)",
              "Environment Awareness",
              "Cleanliness Campaign",
              "Kanya Pujan (Worship of Girls)",
              "Havan in Service Colonies",
              "Small Storytelling Sessions",
              "Religious Text Details",
              "Village Festivals",
              "Child Care Centers",
              "Group Festival Programs",
              "Temple Centered Programs",
              "De-addiction Camps",
              "Travel Arrangement (Fair, Festival)",
              "Village and Settlement Cleaning",
              "Temple Cleaning, Labor Service",
              "Water Conservation",
              "Tree Plantation",
              "Child Reform Centers",
              "Mass Marriage of Poor Girls",
              "Agriculture Seminar, Tulsi Plant Distribution",
              "Service Work Display, Fund Collection",
            ],
          },
          {
            title: "Social Service Projects",
            items: [
              "Bhajan Group",
              "Legal Aid Centers",
              "Adolescent Development Projects",
              "Matru Chhaya",
              "Food Donation Centers",
              "Deep Worship",
              "Mothers' Group",
              "Hostels",
              "Biodiversity and Life Management Conservation",
            ],
          },
        ],
      },
      hi: {
        heading: "सामाजिक आयाम",
        columns: [
          {
            title: "सामाजिक सेवा उपकर्म",
            items: [
              "परिवार प्रबोधन (मिलन)",
              "पर्यावरण जागरण",
              "स्वच्छता अभियान",
              "कन्यापूजन",
              "सेवा बस्तियों में हवन",
              "छोटी-छोटी कथाये करना",
              "धार्मिक ग्रन्थ विवरण",
              "ग्रामोत्सव",
              "शिशु पालक केन्द्र",
              "सामूहिक उत्सव के कार्यक्रम",
              "मंदिर केन्द्रित कार्यक्रम",
              "व्यसन मुक्ति शिविर",
              "यात्रा व्यवस्था (मेला, उत्सव)",
              "ग्राम एवं बस्ती की सफाई",
              "मंदिर स्वच्छता, श्रम सेवा",
              "जल संधारण एवं जल संरक्षण",
              "वृक्षारोपण",
              "जेल में बाल सुधार केन्द्र",
              "निर्धन कन्याओं का सामूहिक विवाह",
              "कृषि संगोष्ठी, तुलसी पौधा वितरण",
              "सेवा कार्य दर्शन, सेवा निधि संग्रह",
            ],
          },
          {
            title: "सामाजिक सेवा प्रकल्प",
            items: [
              "भजन मण्डली",
              "कानूनी सहायता केन्द्र",
              "किशोरी विकास प्रकल्प",
              "मातृछाया",
              "अन्नदान केन्द्र",
              "दीप पूजा",
              "मातृ मण्डली",
              "छात्रावास",
              "जैव विविधता/जीवन व्यवस्था का संरक्षण",
            ],
          },
        ],
      },
    };
  
    return (
      <div className="dimension-page">
        <h1 className="dimension-heading">{content[languageType].heading}</h1>
        <div className="decorative-line"></div>
  
        <div className="columns-container">
          {content[languageType].columns.map((column, index) => (
            <div className="column" key={index}>
              <h3 className="column-title">{column.title}</h3>
              <ul className="column-list">
                {column.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
export default Education;
