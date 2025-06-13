import React from 'react';
import Slider from 'react-slick';
import { FaReact, FaNodeJs, FaGithub, FaDatabase, FaCss3Alt  } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTypescript } from 'react-icons/si';
import { FaMapMarked } from "react-icons/fa";
import { SiCplusplus } from 'react-icons/si';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdNetworkWifi } from "react-icons/md";
import styles from '../styles/project.module.css';
import { BiConversation } from "react-icons/bi";
import { IoIosFitness } from "react-icons/io";
import { SiMysql } from 'react-icons/si';
import { GiPathDistance } from "react-icons/gi";
import { TbBrandReactNative } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { FaPython } from "react-icons/fa";
const projects = [
  {
    icon: <FaPeopleGroup size={50}/>,
    title: "AAM App",
    date: "Septemeber 2022 - Januaray 2023",
    description: "An Android app developed for the 19th Annual Alumni Meet at IIT Kharagpur. Enabled alumni to register, get event schedules and access venue details in real-time.",
    techStack: [<TbBrandReactNative key="react" size={24} color="blue"/>,<FaNodeJs key="node"  color="green"/>, <SiJavascript key="js" size={24} color="#c7b512"/>, <FaCss3Alt key="css" size={24} color="#264de4" />,  <SiMysql key="mysql" size={24} color="#00758F" />],
    github: "https://github.com/shreyaa-1/AAM-app",
  },
  {
    icon: <CiFaceSmile size={50}  />,
    title: "Face Attendance System",
    date: "Feb 2023 - March 2023",
    description: "A real-time attendance tracking system using facial recognition. Achieved 95.07% accuracy using LBPH and Haar Cascades for face detection.",
    techStack: [<FaPython key="node"  color="blue"/>, <SiMongodb key="mongo" color="green" />],
    github: "https://github.com/username/node-api",
  },
  {
    icon: <BiConversation  size={50} />,
    title: "Conversations of KGPians",
    date: "May 2024 - July 2024",
    description: "A student-led storytelling initiative capturing personal journeys and insights. I led the design and coding efforts, focusing on accessible layouts and visual storytelling.",
    techStack: [<FaReact key="react"  size={24} color="blue"/>, <FaNodeJs key="node"  color="green"/>, <SiJavascript key="js" size={24} color="#c7b512"  />, <SiMongodb key="js" size={24} color="green" />, <SiMysql key="mysql" size={24} color="#00758F" />],
    github: "https://github.com/shreyaa-1/conversationsofkgpians",
  },

  {
    icon: <FaMapMarked  size={50} />,
    title: "Travel Planner",
    date: "Aug 2023 - September 2023",
    description: "A web app to plan multi-stop trips with optimized routes.Used Google Maps API and algorithms to minimize travel distance.Included interactive map controls and geolocation-based suggestions.",
    techStack: [<FaReact key="react"  size={24} color="blue" />, <SiJavascript key="js" size={24} color="#c7b512"  />, <FaCss3Alt key="css" size={24} color="#264de4" />],
    github: "https://github.com/shreyaa-1/Travel-Planner",
  },
  {
    icon: <IoIosFitness  size={50} />,
    title: "Fitness Tracker",
    date: "May 2022 - July 2022",
    description: "A web app to log workouts, track calories and visualize progress. Supported real-time updates and weekly performance summaries.Focused on clean UI and motivation-driven design",
    techStack: [<SiTypescript key="react"  size={24} color="blue" />, <SiJavascript key="js" color="#c7b512"  />,  <FaCss3Alt key="js" color="#264de4"  />],
    github: "https://github.com/shreyaa-1/Fitness-tracker",
  },
  {
    icon: <GiPathDistance size={50}  />,
    title: "Path Visualiser",
    date: "May 2024 - July 2024",
    description: "A web-based algorithm visualizer for sorting and pathfinding. Made concepts like BFS, DFS, Dijkstra's visually intuitive. Useful for beginners to understand algorithm behavior in real time.",
    techStack: [<SiCplusplus key="cpp" size={24} color="#00599C" />,<SiJavascript key="js"  color="#c7b512"  />,<FaCss3Alt key="js" color="#264de4"  />],
    github: "https://github.com/shreyaa-1/VISUALISER",
  },
  {
    icon: <MdNetworkWifi size={50}  />,
    title: "Opportunity Portal",
    date: "Aug 2022 - October 2022",
    description: "A centralized portal to find internships, fellowships and scholarships. Included smart filters and deadline reminders to reduce FOMO. Aimed to democratize access to verified opportunities.",
    techStack: [<FaNodeJs key="node"  color="green"/>,<FaReact key="react" size={24} color="blue"/>, <SiJavascript key="js" color="#c7b512"/>, <SiMysql key="mysql" size={24} color="#00758F" />],
    github: "https://github.com/shreyaa-1/opportunity_portal",
  },

];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 6000,
   appendDots: dots => (
  <div>
    <ul style={{ margin: "10px", padding: "10px", backgroundColor: "transparent" }}> 
      {dots} 
    </ul>
  </div>
),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: true }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 }
      }
    ]
  };

  return (
    <div className="full-width-carousel" id="projects">
      <div className={styles.textcarous}>My Projects</div>
      <div className={styles.textcarousel}>  A collection of things I’ve built, explored, and enjoyed working on — each one taught me something new.</div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className={styles.cardContainer}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>{project.icon}</div>
              <div className={styles.cardTitle}>{project.title}</div>
              <div className={styles.cardDate}>{project.date}</div>
              <div className={styles.cardDescription}>{project.description}</div>
              <div className={styles.techStack}>
                {project.techStack.map((icon, idx) => (
                  <span key={idx} className={styles.techIcon}>{icon}</span>
                ))}
              </div>
              <div className={styles.githubLink}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    <hr className={styles.greyLine} />

    </div>
  );
};

export default Carousel;
