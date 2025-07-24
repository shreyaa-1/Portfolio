import React from 'react';
import styles from '../styles/timeline.module.css';


import htmlimg from '../assets/about-icon.png';
import javascriptimg from '../assets/about-icon.png';
import reactjsimg from '../assets/about-icon.png';
import nodejsimg from '../assets/about-icon.png';
import expressjsimg from '../assets/about-icon.png';
import mongodbimg from '../assets/about-icon.png';
import phpimg from '../assets/about-icon.png';

export default function Home() {
  return (
    <div className={styles.mains} id="exper">
     <div className={styles.textcarous}>Experience</div>
      <div className={styles.textcarousel}>          Real-world experiences that helped me grow as a developer and collaborator.</div>
      <div className={styles.timeline}>

        {/* HTML */}
      

        {/* JavaScript */}
       

        {/* React Js */}
        <div className={`${styles.container} ${styles['left-container']}`}>
          {/* <img src={reactjsimg} alt="React JS" /> */}
           <div className={styles.yearcircle}>2022</div>
          <div className={`${styles['text-box']} ${styles.reactjscard}`}>

             <span className={styles.company}>Students' Alumni Cell</span>
            <p>
   Designed & deployed mobile app for 19th Annual Meet using Node.js and MySQL backend.
            </p>
            <span className={`${styles['left-container-arrow']} ${styles.reactjsarrow}`}></span>
          </div>
        </div>

        {/* Node Js */}
        <div className={`${styles.container} ${styles['right-container']}`}>
          {/* <img src={nodejsimg} alt="Node JS"  */}
           <div className={styles.yearcircler}>2023</div>
          <div className={`${styles['text-box']} ${styles.nodejscard}`}>

           <span className={styles.company}>Frontend Development Intern, QuizSagar</span>
            <p>
             Built responsive UI with ReactJS, integrated Razorpay, added SEO + analytics.
            </p>
            <span className={`${styles['right-container-arrow']} ${styles.nodejsarrow}`}></span>

            
            <span className={`${styles['right-container-arrow']} ${styles.nodejsarrow}`}></span>
             <span className={styles.company}>Analyst, PinkMoon Apps</span>
            <p>
 Worked on integrating and optimizing voice recognition features for mobile applications. 
            </p>
            <span className={`${styles['right-container-arrow']} ${styles.nodejsarrow}`}></span>
          </div>
          
        </div>

        {/* Express Js */}
        <div className={`${styles.container} ${styles['left-container']}`}>
          {/* <img src={expressjsimg} alt="Express JS" /> */}
           <div className={styles.yearcircle}>2024</div>
          <div className={`${styles['text-box']} ${styles.expressjscard}`}>
           
         <span className={styles.company}>Software Development Intern, EESA-AI</span> 
            <p>
             Built calendar/task modules, REST APIs, Redis caching & AWS integration for 120GB+ data.
            </p>
            <span className={`${styles['left-container-arrow']} ${styles.expressjsarrow}`}></span>

            <span className={styles.company}>Research Intern, Firat University</span> 
            <p>
            Improved DETR object detection model accuracy from 63.5% to 72.7% using LoRA & pruning on RGB + thermal images.
            </p>
            <span className={`${styles['left-container-arrow']} ${styles.expressjsarrow}`}></span>
          </div>
        </div>

        
       <div className={`${styles.container} ${styles['right-container']}`}>
          {/* <img src={nodejsimg} alt="Node JS"  */}
           <div className={styles.yearcircler}>2025</div>
          <div className={`${styles['text-box']} ${styles.nodejscard}`}>

           <span className={styles.company}>MC Delivery Associate, Accenture</span>
            <p>
            Joined Accenture as a Song Service Associate, focusing on enhancing operations and customer satisfaction.
            </p>
            <span className={`${styles['right-container-arrow']} ${styles.nodejsarrow}`}></span>

            
        
          </div>
          
        </div>

       

      </div>
    </div>
  );
}
