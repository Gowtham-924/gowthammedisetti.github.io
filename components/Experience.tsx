<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';
=======
import React from 'react';
import Image from 'next/image';
import styles from './../styles/Home.module.scss';
>>>>>>> 4b5fb16b7c02179fc53295c05405e0cf92fbf1cc

const Experience = () => {
  const timelineData = [
    {
      title: "Generative AI Engineer",
      company: "Phenom Pvt. Ltd.",
      date: "2020 - 2024",
      description: "Developed and optimized AI-driven products, focusing on generative models and NLP to enhance user experience and drive innovation across the Talent Experience platform.",
      logo: "/images/phenom-logo.png"  // Ensure the correct path
    },
    {
      title: "Research Assistant",
      company: "University of North Texas",
      date: "2022 - 2024",
      description: "Conducted research on advanced NLP techniques and generative AI, contributing significantly to the 'GenLitAI' project, which focuses on automated literature mining using AI.",
      logo: "/images/unt-logo.jpg"  // Ensure the correct path
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
<<<<<<< HEAD
      <h2 className={styles.sectionTitle}>My Experience</h2>
      {timelineData.map((item, index) => (
        <TimelineCard key={index} item={item} />
      ))}
=======
      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image src="/images/phenom-logo.png" alt="Phenom Pvt. Ltd. Logo" width={50} height={50} />
          </div>
          <div>
            <h3 className={styles.jobTitle}>Generative AI Engineer</h3>
            <p className={styles.companyName}>Phenom Pvt. Ltd.</p>
          </div>
        </div>
        <p className={styles.jobDates}>2020 - 2024</p>
        <p className={styles.jobDescription}>
          Developed and optimized AI-driven products, focusing on generative models and NLP to enhance user experience and drive innovation across the Talent Experience platform.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.logoContainer}>
            <Image src="/images/unt-logo.jpg" alt="University of North Texas Logo" width={50} height={50} />
          </div>
          <div>
            <h3 className={styles.jobTitle}>Research Assistant</h3>
            <p className={styles.companyName}>University of North Texas</p>
          </div>
        </div>
        <p className={styles.jobDates}>2022 - 2024</p>
        <p className={styles.jobDescription}>
          Conducted research on advanced NLP techniques and generative AI, contributing significantly to the &quot;GenLitAI&quot; project, which focuses on automated literature mining using AI.
        </p>
      </div>
      
      {/* Add more experiences as needed */}
>>>>>>> 4b5fb16b7c02179fc53295c05405e0cf92fbf1cc
    </section>
  );
};

const TimelineCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const isDescriptionLong = item.description.length > 150;

  return (
    <motion.div
      className={styles.timelineItem}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.timelineContent}>
        <div className={styles.timelineHeader}>
          <img src={item.logo} alt={`${item.company} logo`} className={styles.companyLogo} />
          <div>
            <span className={styles.timelineTitle}>{item.title}</span>
            <p className={styles.timelineCompany}>{item.company}</p>
          </div>
          <span className={styles.timelineDate}>{item.date}</span>
        </div>
        <p className={styles.timelineDescription}>
          {isExpanded || !isDescriptionLong
            ? item.description
            : `${item.description.slice(0, 150)}...`}
          {isDescriptionLong && (
            <span onClick={toggleExpand} className={styles.showMoreText}>
              {isExpanded ? "" : "Show More"}
            </span>
          )}
        </p>
      </div>
      <div className={styles.timelineCircle}></div>
    </motion.div>
  );
};

export default Experience;
