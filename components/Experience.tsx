import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

const Experience = () => {
  const timelineData = [
    {
      title: "Generative AI Engineer",
      company: "Phenom Pvt. Ltd.",
      date: "2020 - 2024",
      description: "Developed and optimized AI-driven products, focusing on generative models and NLP to enhance user experience and drive innovation across the Talent Experience platform.",
      logo: "/images/phenom-logo.png"  // Ensure the correct path to your logo
    },
    {
      title: "Research Assistant",
      company: "University of North Texas",
      date: "2022 - 2024",
      description: "Conducted research on advanced NLP techniques and generative AI, contributing significantly to the 'GenLitAI' project, which focuses on automated literature mining using AI.",
      logo: "/images/unt-logo.jpg"  // Ensure the correct path to your logo
    },
    // Add more experiences as needed
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>My Experience</h2>
      {timelineData.map((item, index) => (
        <TimelineCard key={index} item={item} />
      ))}
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
              {isExpanded ? "Show Less" : "Show More"}
            </span>
          )}
        </p>
      </div>
      <div className={styles.timelineCircle}></div>
    </motion.div>
  );
};

export default Experience;
