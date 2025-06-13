

import React from "react";
import styles from "../styles/about.module.css";
import Counter from "../components/counter.js";
import School from "../assets/school.png";
import College from "../assets/college.png";

const stats = [
  { label: 'Projects Completed', end: 12, duration: 1 },
  { label: 'Internships Completed', end: 4, duration: 1 },
  { label: 'Awards & Mentions', end: 5, duration: 1 },
];
export default function Home() {
  return (
    <div id ="about" className={styles.Homehome}>
    {/* <div className={styles.Homehome}> */}
    <div className={styles.home}>
      
      <div className={styles.hometxt}>
        <div className={styles.headingred}> ABOUT</div>
        <div className={styles.head}>
          <span>Passionate Developer & </span>
          <span>Relentless Learner</span>
        </div>
      
        <p>
         I’m a recent graduate from IIT Kharagpur who thrives at the intersection of AI and software development. From building scalable web apps to training deep learning models, I focus on creating purposeful, clean and user-centric solutions.
        </p>
   <div className={styles['contact-container']}>
  <a href="#edu"> <button className={styles['contact-button']}> <b>EDUCATION</b></button></a>
</div>
    
  
      </div>
      <div className={styles.imghome}></div>
     </div>
        <div className={styles.gridContainer}>
          
      {stats.map((item, idx) => (
        <div key={idx} className={styles.gridItem}>
          <Counter end={item.end} duration={item.duration} />
          <div className={styles.heading}>{item.label}</div>
        </div>
      ))}
    </div>

 <div className={styles.home}>
      
      <div className={styles.hometxt}>
        <div className={styles.headingred}> HOW I WORK</div>
        <div className={styles.head}>
          <span>My 3-Step Approach to  </span>
          <span>Building Things</span>
        </div>
      
        <p>
      From exploration to iteration, here's how I usually navigate a project—whether it's code, design, or an idea taking shape.
        </p>
   
    
  
      </div>
      <div className={styles.rightcount}>
        <div className={styles.count}>
          <div className={styles.countnum}>1</div>
          <div className={styles.counttxt}>Explore Ideas and Learn Deeply  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;           </div>
        </div>
        <div className={styles.count}>
          <div className={styles.countnum}>2</div>
          <div className={styles.counttxt}>Build, Experiment and Iterate Fast    &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;     &nbsp;&nbsp;&nbsp;&nbsp;        </div>
        </div>
        <div className={styles.count}>
          <div className={styles.countnum}>3</div>
          <div className={styles.counttxt}>Reflect, Refine and Improve Continuously     &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;      </div>
        </div>
      </div>
     </div>

      
      
  <div className={styles.headingreds} id="edu"> EDUCATION</div>
       <div className={styles.gridContainers}>
  {/* College 1 */}
  
  <div className={styles.gridItems}>
    <img src={School} alt="IIT Kharagpur" className={styles.collegeImage} />
    <div className={styles.headings}>IIT KHARAGPUR </div>
    <div className={styles.headingredsp}> 2021-2025</div>
    <p className={styles.description}>
     
      Graduated in 2025, specialized in AI,  full-stack and software developemnt
    </p>
  </div>

  {/* College 2 */}
  <div className={styles.gridItems}>
    <img src={College} alt="AISSCE" className={styles.collegeImage} />
    <div className={styles.headings}>AISSCE</div>
     <div className={styles.headingredsp}> 2018-2020</div>
    <p className={styles.description}>

    Passed with distinction, majoring in PCM + Computer Science.
    </p>
  </div>

  {/* College 3 */}
  <div className={styles.gridItems}>
    <img src={College} alt="EESA-AI" className={styles.collegeImage} />
    <div className={styles.headings}>AISSE</div>
     <div className={styles.headingredsp}> 2017-2018</div>
    <p className={styles.description}>
       Scored 10 CGPA, with a strong foundation in Mathematics and Science.     
    </p>
  </div>
</div>



    </div>
  );
}
