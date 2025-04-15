import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import "./styles/Footer.css";

export default function Footer({ languageType }) {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  // Language-based text
  const texts = {
    getToKnowUs: languageType === "hi" ? "हमारे बारे में जानें" : "Get to Know Us",
    ourJourney: languageType === "hi" ? "हमारी यात्रा" : "Our Journey",
    ourPartners: languageType === "hi" ? "हमारे साथी" : "Our Partners",
    gallery: languageType === "hi" ? "गैलरी" : "Gallery",
    newsMedia: languageType === "hi" ? "समाचार एवं मीडिया" : "News & Media",
    contactUs: languageType === "hi" ? "संपर्क करें" : "Contact Us",

    ourInitiatives: languageType === "hi" ? "हमारी पहल" : "Our Initiatives",
    childCare: languageType === "hi" ? "बाल देखभाल" : "Child Care",
    education: languageType === "hi" ? "शिक्षा" : "Education",
    health: languageType === "hi" ? "स्वास्थ्य" : "Health",
    empowerment: languageType === "hi" ? "सशक्तिकरण" : "Empowerment",
    social: languageType === "hi" ? "सामाजिक" : "Social",

    getInvolved: languageType === "hi" ? "शामिल हों" : "Get Involved",
    beVolunteer: languageType === "hi" ? "स्वयंसेवक बनें" : "Be a Volunteer",
    donateMoney: languageType === "hi" ? "धन दान करें" : "Donate Money",
    donateKind: languageType === "hi" ? "सामग्री दान" : "Donate in Kind",
    donateSkill: languageType === "hi" ? "कौशल दान" : "Donate Skill",
    emailCallQuery: languageType === "hi" ? "ईमेल / कॉल / प्रश्न" : "Email / Call / Query",

    contact: languageType === "hi" ? "संपर्क" : "Contact",

    privacyPolicy: languageType === "hi" ? "गोपनीयता नीति" : "Privacy Policy",
    termsConditions: languageType === "hi" ? "नियम व शर्तें" : "Terms & Conditions",
    sitemap: languageType === "hi" ? "साइट मानचित्र" : "Sitemap",
    accessibility: languageType === "hi" ? "पहुँच" : "Accessibility",

    developedByPre: languageType === "hi" ? "टीम " : "Developed by Team ",
    developedByPost: languageType === "hi" ? " द्वारा विकसित" : "",
    allRightsReserved: languageType === "hi" ? "सर्वाधिकार सुरक्षित।" : "All rights reserved."
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Column 1 */}
          <div className="footer-column">
            <h3 className="footer-heading">{texts.getToKnowUs}</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot" />{texts.ourJourney}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.ourPartners}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.gallery}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.newsMedia}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.contactUs}</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3 className="footer-heading">{texts.ourInitiatives}</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot" />{texts.childCare}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.education}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.health}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.empowerment}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.social}</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3 className="footer-heading">{texts.getInvolved}</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot" />{texts.beVolunteer}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.donateMoney}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.donateKind}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.donateSkill}</a></li>
              <li><a href="/"><span className="footer-list-dot" />{texts.emailCallQuery}</a></li>
            </ul>
          </div>


          <div className="footer-column" id="contact-section">
            <h3 className="footer-heading">{texts.contact}</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p style={{ textAlign: 'justify' }}>
  Sewa Bharti Delhi, Bal Vihar Singh Marg, Geeta Vihar, Delhi (India)
</p>
   </div>
              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p>+2345340, +2345015, 0800005561</p>
              </div>
              <div className="footer-contact-item">
                <Mail className="footer-icon" />
                <a href="mailto:contact@sewabharti.org">contact@sewabharti.org</a>
              </div>
            </div>

   
            <div className="footer-social">
              <div className="footer-social-icons">
                <a href="/" aria-label="Facebook" className="footer-social-icon"><Facebook size={20} /></a>
                <a href="/" aria-label="Twitter" className="footer-social-icon"><Twitter size={20} /></a>
                <a href="/" aria-label="Instagram" className="footer-social-icon"><Instagram size={20} /></a>
                <a href="/" aria-label="YouTube" className="footer-social-icon"><Youtube size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {currentYear} Sewa Bharti. {texts.allRightsReserved}</p>
          <div className="footer-bottom-links">
            <a href="/privacy">{texts.privacyPolicy}</a>
            <a href="/terms">{texts.termsConditions}</a>
            <a href="/sitemap">{texts.sitemap}</a>
            <a href="/accessibility">{texts.accessibility}</a>
          </div>
        </div>
      </div>

      {/* Dev Credit */}
      <div className="footer-credit">
        <p>
          {texts.developedByPre}
          <a href="mailto:bludgers52@gmail.com" style={{ textDecoration: "underline", color: "white" }}>
            Bludgers
          </a>
          {texts.developedByPost}
        </p>
      </div>
    </footer>
  );
}
