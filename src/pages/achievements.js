

import React from "react";
import styles from "../styles/achievements.module.css";

import Achievements from "../assets/achieve.png";
import Maps from "../assets/map.png";
import Location from "../assets/location.png";
import Social from "../assets/social.png";
import Email from "../assets/email.png";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

import Contact from "../components/contact.js";
import { FaCode, FaMedal, FaTrophy, FaBasketballBall, FaFutbol } from "react-icons/fa";

import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "Competitive Programmer",
    description: "Specialist (1502) on Codeforces, 4★ (1919) on CodeChef, Knight on LeetCode"
  },
  {
    icon: <FaTrophy />,
    title: "Global Rank in CodeChef",
    description: "Rank 15 in Starters 145 Div 2, Rank 144 in Starters 117"
  },
  {
    icon: <FaTrophy />,
    title: "Tech Competitions",
    description: "Rank 8/250 in Overnite, Rank 12/300 in Source Code at Kshitij"
  },
  {
    icon: <FaMedal />,
    title: "Data Analytics",
    description: "3rd place (120+ teams) in Open IIT Tourism Analytics Challenge"
  },
  {
    icon: <FaBasketballBall />,
    title: "Basketball GC",
    description: "Won Silver in inter-hall Basketball at General Championship"
  },
  {
    icon: <FaFutbol />,
    title: "Football Inter-Dept",
    description: "Won Bronze in Women's Football Tournament"
  }
];



export default function Home() {
  return (
    <div className={styles.Homehome} id="achi">
    <div className={styles.home}>
      
      <div className={styles.hometxt}>
        <div className={styles.headingred}> ACHIEVEMENTS</div>
        <div className={styles.head}>
          <span>Milestones That Shaped My Journey</span>
          <div className={styles.cardRow}>
     {achievements.map((item, index) => (
  <div className={styles.achievementCard} key={index}>
    <div className={styles.icon}>{item.icon}</div>
    <div className={styles.textContent}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      {item.title === "Competitive Programmer" && (
        <div className={styles.platformIcons}>
          <a href="https://codeforces.com/profile/shreya_1" target="_blank" rel="noopener noreferrer">
          <SiCodeforces className={styles.platformIcon} /></a>
          <a href="https://www.codechef.com/users/sh_reya" target="_blank" rel="noopener noreferrer"> <SiCodechef className={styles.platformIcon} /> </a>
         <a href="https://leetcode.com/u/sh_reya_1/" target="_blank" rel="noopener noreferrer">  <SiLeetcode className={styles.platformIcon} /></a>
        </div>
      )}
    </div>
  </div>
))}

    </div>
        </div>
        <p>  </p>
      </div>
      <div className={styles.imghome}></div>
     </div>
      <div className={styles.contactSection}>
  <img src={Maps} alt="Background" className={styles.contactImage} />
  <div className={styles.formOverlay}>
    <Contact />
  </div>
</div>
      <div className={styles.gridContainers}>
  {/* College 1 */}
  
 <div className={styles.gridItems}>
  <div className={styles.flexHeadings}>
      <img src={Email} alt="AISSCE" className={styles.collegeImage} /> 
    <div className={styles.headingss}> E MAIL</div>
  </div>
  <p className={styles.descriptions}>
   shreyaa2802@gmail.com
  </p>
</div>

  {/* College 2 */}
  <div className={styles.gridItems}>
      <div className={styles.flexHeadings}>
    <img src={Location} alt="AISSCE" className={styles.collegeImage} /> 
    <div className={styles.headingss}>ADDRESS</div>
</div>
    <p className={styles.descriptions}>

Patna, Bihar, India
    </p>
  </div>

  <div className={styles.gridItems}>
    <div className={styles.flexHeadings}>
     <img src={Social} alt="AISSCE" className={styles.collegeImage} /> 
    <div className={styles.headingss}>SOCIALS</div>
</div>
    <div className={styles.socialRow}>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram className={styles.socialIcon} />
    </a>
    <a href="https://www.facebook.com/shreya.kumari.762280/" target="_blank" rel="noopener noreferrer">
      <FaFacebook className={styles.socialIcon} />
    </a>
    <a href="https://www.linkedin.com/in/-shreya-kumari/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className={styles.socialIcon} />
    </a>
    <a href="https://github.com/shreyaa-1" target="_blank" rel="noopener noreferrer">
      <FaGithub className={styles.socialIcon} />
    </a>
  </div>
  </div>
  
</div>

    </div>
  );
}
