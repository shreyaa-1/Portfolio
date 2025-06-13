import React from "react";
import styles from "../styles/footer.module.css";
import logo from "../assets/LOGO.png";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaMastodon,
  FaThreads,
  FaFacebook,
  FaInstagram
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo" itemScope itemType="http://schema.org/Person">
      <div className={`${styles.footerLeft} h-card`} itemScope itemType="http://schema.org/Person">
        <img src={logo} alt="Logo" itemProp="image" className={`${styles.logo} u-logo`} />
        {/* <h3 itemProp="name" className="p-name">Shreya</h3> */}
        <p className="p-job-title" itemProp="jobTitle">Software Developer</p>
        <nav aria-label="Footer Navigation">
          <p className={styles.footerLinks}>
            <a href="#home" itemProp="url" className={styles.link}>Home</a>
            <a href="#about" itemProp="url" className={styles.link}>About</a>
            <a href="#projects" itemProp="url" className={styles.link}>Projects</a>
            <a href="#contact" itemProp="url" className={styles.link}>Contact</a>
          </p>
        </nav>
      
      </div>

      <div className={styles.footerCenter}>
        <div itemScope itemType="http://schema.org/PostalAddress" className="p-address">
          <FaMapMarkerAlt />
          <p>
            <p itemProp="telephone" className="p-tel">Patna, Bihar, India, 800001</p>
          </p>
        </div>
        <div>
          <FaPhone />
          <p itemProp="telephone" className="p-tel">+91 98xxxxxxxxx0</p>
        </div>
        <div>
          <FaEnvelope />
          <p>
             <p itemProp="telephone" className="p-tel">shreyaa2802@gmail.com</p>
          </p>
        </div>
      </div>

      <div className={styles.footerRight}>
        <p className={styles.footerAbout}>
          <span>About Me:</span>
          Passionate developer with an eye for detail and love for building seamless digital experiences.
        </p>
        <div className={styles.footerSocials}>
          <a href="https://www.linkedin.com/in/-shreya-kumari/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/shreyaa-1" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/shreya.kumari.762280/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/shreya" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
  <p className={styles.footerName}>
          © 2025 <a href="" target="_blank" rel="noopener noreferrer">Shreya</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
