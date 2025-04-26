import React from "react";
import './styles/ContactUs.css';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = ({languageType}) => {
    const content = {
        en: {
            heading: "Contact Us",
            address: "Madhav Dham, Swami Dayananada Marg, 375 D Rajendra Nagar East, Gorakhpur-273015, U.P. (India)",
            phones: ["+91-9936161761", "+91-7007159590"],
            email: "sevabhartigorakshprant@gmail.com"
        },
        hi: {
            heading: "संपर्क करें",
            address: "माधव धाम, स्वामी दयानंद मार्ग, 375 डी राजेंद्र नगर पूर्व, गोरखपुर-273015, उ.प्र. (भारत)",
            phones: ["+91-9936161761", "+91-7007159590"],
            email: "sevabhartigorakshprant@gmail.com"
        }
    };
    
    const currentContent = languageType === 'hi' ? content.hi : content.en;

    return(
        <div className="contact-container" id="contact-section">
            <h2>{currentContent.heading}</h2>
            
            <div className="contact-details">
                <div className="contact-line">
                    <MapPin className="inline-icon" />
                    <span>{currentContent.address}</span>
                </div>
                
                <div className="contact-line">
                    <Phone className="inline-icon" />
                    <span>{currentContent.phones.join(", ")}</span>
                </div>
                
                <div className="contact-line">
                    <Mail className="inline-icon" />
                    <span>{currentContent.email}</span>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;