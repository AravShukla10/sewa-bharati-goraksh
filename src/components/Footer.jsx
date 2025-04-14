import React from "react";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Top section with multiple columns */}
      <div className="footer-top">
        <div className="footer-column">
          <h3 className="footer-heading">Get to Know Us</h3>
          <ul className="footer-list">
            <li><a href="/">Our Journey</a></li>
            <li><a href="/">Our Partners</a></li>
            <li><a href="/">Gallery</a></li>
            <li><a href="/">News & Media</a></li>
            <li><a href="/">Testimonial</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Our Initiative</h3>
          <ul className="footer-list">
            <li><a href="/">Child Care</a></li>
            <li><a href="/">Education</a></li>
            <li><a href="/">Health</a></li>
            <li><a href="/">Empowerment</a></li>
            <li><a href="/">Social</a></li>
            <li><a href="/">Disaster Response</a></li>
            <li><a href="/">Medical Camps</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Get Involved</h3>
          <ul className="footer-list">
            <li><a href="/">Be a Volunteer</a></li>
            <li><a href="/">Donate Money</a></li>
            <li><a href="/">Donate in Kind</a></li>
            <li><a href="/">Donate Skill</a></li>
            <li><a href="/">Email / Call / Query</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-address">
            Sewa Bharti Delhi
            <br />
            Bal Vihar Singh Marg,
            <br />
            Geeta Vihar, Delhi (India)
          </p>
          <p className="footer-phone">+2345340, +2345015, 0800005561</p>
          
          {/* Social links */}
          <div className="footer-socials">
            <a href="/" aria-label="facebook" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" aria-label="twitter" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" aria-label="instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" aria-label="youtube" className="social-icon">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright, policy links, etc. */}
      <div className="footer-bottom">
        <p>Made with Love by team Bludgers.</p>
        <p>© 2024 Sewa Bharti, All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
