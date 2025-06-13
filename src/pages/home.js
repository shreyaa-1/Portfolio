

import React from "react";
import styles from "../styles/home.module.css";


export default function Home() {
  return (
    <div className={styles.home} id="home">
      <div className={styles.imghome}></div>
      <div className={styles.hometxt}>
        <div className={styles.head}>
          <span>   Shaping the Web, One Pixel and </span>
          <span>Line At a Time.</span>
        </div>
      
        <p className ={styles.par}>
           Through every line of code and interface I design, I aim to build with purpose and simplicity. This portfolio showcases my journey through coding and learning.
        </p>
   <div className={styles['contact-container']}>
    <button className={styles['experience-button']}>
      <a href="#exper">
      <b>EXPERIENCE</b>
      </a></button>
  
 
{/*    
       <button className={styles['contact-button']}>
         <a href="#contact">
    <b>CONTACT</b>
  </a>
    </button>    */}

   <a href="#contact">
      <button className={styles['contact-button']}><b>CONTACT</b></button>
    </a> 
</div>
    
  
      </div>
    </div>
  );
}
