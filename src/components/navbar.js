import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';  // note the import as styles
import logo from '../assets/LOGO.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <img src={logo} alt="Logo" className={styles['logo-img']} />
      </div>

      <ul className={`${styles.navbar__menu} ${isOpen ? styles.active : ''}`}>
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#edu">Education</a></li>
  <li><a href="#projects">Projects</a></li>
  <li><a href="#exper">Experience</a></li>
  <li><a href="#achi">Achievements</a></li>
</ul>

<ul className={styles.navbar__icons}>
  <li>
    <a href="#contact">
      <button className={styles['contact-button']}><b>CONTACT</b></button>
    </a>
  </li>
</ul>


      <button className={styles.navbar__toggleBtn} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />

      </button>
    </nav>
  );
};

export default Navbar;
