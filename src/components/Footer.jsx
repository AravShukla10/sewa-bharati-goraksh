import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import "./styles/Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-heading">Get to Know Us</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot"></span>Our Journey</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Our Partners</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Gallery</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>News & Media</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Our Initiatives</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot"></span>Child Care</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Education</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Health</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Empowerment</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Social</a></li>
               </ul>
          </div>
          
          <div className="footer-column">
            <h3 className="footer-heading">Get Involved</h3>
            <ul className="footer-list">
              <li><a href="/"><span className="footer-list-dot"></span>Be a Volunteer</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Donate Money</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Donate in Kind</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Donate Skill</a></li>
              <li><a href="/"><span className="footer-list-dot"></span>Email / Call / Query</a></li>
            </ul>
            
           
          </div>
             
          <div className="footer-column">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <MapPin className="footer-icon" />
                <p>
                  Sewa Bharti Delhi,Bal Vihar Singh Marg, Geeta Vihar, Delhi (India)
                </p>
              </div>
              
              <div className="footer-contact-item">
                <Phone className="footer-icon" />
                <p>+2345340, +2345015, 0800005561</p>
              </div>
              
              <div className="footer-contact-item">
                <Mail className="footer-icon" />
                <a href="mailto:contact@sewabharti.org">
                  contact@sewabharti.org
                </a>
              </div>
            </div>
            
            {/* Social links */}
            <div className="footer-social">
             <div className="footer-social-icons">
                <a href="/" aria-label="Facebook" className="footer-social-icon">
                  <Facebook size={20} />
                </a>
                <a href="/" aria-label="Twitter" className="footer-social-icon">
                  <Twitter size={20} />
                </a>
                <a href="/" aria-label="Instagram" className="footer-social-icon">
                  <Instagram size={20} />
                </a>
                <a href="/" aria-label="YouTube" className="footer-social-icon">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
     
      
      {/* Bottom section with copyright, policy links, etc. */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="footer-copyright">© {currentYear} Sewa Bharti. All rights reserved.</p>
         
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms & Conditions</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}