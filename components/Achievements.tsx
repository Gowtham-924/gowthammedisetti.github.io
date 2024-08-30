import React, { useState } from 'react';
import { FaTrophy, FaMedal } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';

const Achievements = () => {
  const [activeIndices, setActiveIndices] = useState(achievementsData.map((_, index) => index));  // Initialize with all indices

  const toggleAccordion = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter(i => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };
  

  return (
    <section id="achievements" className={styles.achievementsSection}>
      <h2>Achievements</h2>
      <div className={styles.achievementList}>
        {achievementsData.map((achievement, index) => (
          <div key={index} className={styles.achievementItem}>
            <div
              className={styles.achievementTitle}
              onClick={() => toggleAccordion(index)}
            >
              <div className={styles.achievementIcon}>
                {achievement.icon}
              </div>
              <span>{achievement.title}</span>
            </div>
            <div
              className={`${styles.achievementContent} ${
                activeIndices.includes(index) ? styles.active : ''
              }`}
            >
              <p>{achievement.details}</p>
              {achievement.image && (
                <div className={styles.achievementImage}>
                  <img src={achievement.image} alt={achievement.title} />
                </div>
              )}
              {achievement.url && (
                <a
                  href={achievement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.achievementLink}
                >
                  View Credential
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const achievementsData = [
  {
    icon: <FaMedal />,
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Professional Certification',
    details: 'Achieved professional certification in Generative AI, demonstrating expertise in OCI infrastructure and AI services.',
    image: '/images/Oracle-badge.png',  // Path to the badge image
    url: 'https://www.credly.com/badges/your-credential-url',  // URL to the credential
  },
  {
    icon: <FaTrophy />,
    title: "First author of the 'LitAI' paper accepted at the 2024 IEEE MIPR Conference",
    details: 'Led the development of LitAI, a pioneering model for literature understanding, and presented it at a prestigious conference.',
    url: 'https://www.ieee.org/conferences_events/conferences/conferencedetails/index.html',  // URL to the conference details
  },
  {
    icon: <FaTrophy />,
    title: 'Developed a cutting-edge generative model for academic text generation',
    details: 'Created a generative model that significantly reduced research time for academic papers.',
  },
  {
    icon: <FaMedal />,
    title: 'Academy Accreditation - Generative AI Fundamentals from Databricks',
    details: 'Earned accreditation for foundational knowledge and skills in generative AI using Databricks.',
    image: '/images/databricks-badge.png',  // Path to the badge image
    url: 'https://databricks.com/learn/certification',  // URL to the credential
  },
  {
    icon: <FaMedal />,
    title: 'Honored as an AI Student Scholar at UNT',
    details: 'Recognized as an AI Student Scholar for outstanding research and academic achievements in the field of AI.',
    image: '/images/UNT-research-logo.png',
    url: 'https://research.unt.edu/magazine/ai-student-scholars',
  },
  {
    icon: <FaTrophy />,
    title: 'Top contributor to AI-driven projects at Phenom Pvt. Ltd.',
    details: 'Played a key role in optimizing AI-driven products, focusing on user experience and innovation.',
  },
];

export default Achievements;
