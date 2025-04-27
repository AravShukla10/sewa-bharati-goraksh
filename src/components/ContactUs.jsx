import React, { useEffect, useRef } from "react";
import './styles/ContactUs.css';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = ({ languageType }) => {
  const topRef = useRef(null);

  const content = {
    en: {
      heading: "Contact Us",
      address: "Madhav Dham, Swami Dayananada Marg, 375 D Rajendra Nagar East, Gorakhpur-273015, U.P. (India)",
      phones: ["+91-9936161761", "+91-7007159590"],
      email: "sewabharatigoraksh@gmail.com"
    },
    hi: {
      heading: "संपर्क करें",
      address: "माधव धाम, स्वामी दयानंद मार्ग, 375 डी राजेंद्र नगर पूर्व, गोरखपुर-273015, उ.प्र. (भारत)",
      phones: ["+91-9936161761", "+91-7007159590"],
      email: "sewabharatigoraksh@gmail.com"
    }
  };
    
  const currentContent = languageType === 'hi' ? content.hi : content.en;

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  
  return (
    <div className="contact-container" id="contact-section" ref={topRef}>
      <div className="contact-wrapper">
        <h2 className="contact-heading">{currentContent.heading}</h2>
            
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-wrapper">
              <MapPin className="contact-icon" />
            </div>
            <div className="contact-text">{currentContent.address}</div>
          </div>
                
          <div className="contact-item">
            <div className="icon-wrapper">
              <Phone className="contact-icon" />
            </div>
            <div className="contact-text">{currentContent.phones.join(", ")}</div>
          </div>
                
          <div className="contact-item">
            <div className="icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <div className="contact-text">{currentContent.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
