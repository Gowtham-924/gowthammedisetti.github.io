// components/Skills.tsx

import React, { useState } from 'react';
import styles from '../styles/Home.module.scss';

const skillsData = [
  { name: 'Generative AI', isTopSkill: true },
  { name: 'NLP', isTopSkill: true },
  { name: 'GPT Series' },
  { name: 'Transformers' },
  { name: 'Azure OpenAI', isTopSkill: true },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Python' },
  { name: 'Java (OOP)' },
  { name: 'JavaScript' },
  { name: 'SQL' },
  { name: 'Redis' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Python' },
  { name: 'Java (OOP)' },
  { name: 'JavaScript' },
  { name: 'SQL' },
  { name: 'Redis' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Python' },
  { name: 'Java (OOP)' },
  { name: 'JavaScript' },
  { name: 'SQL' },
  { name: 'Redis' }
  // Add more skills as needed
];

const Skills = () => {
  const [visible, setVisible] = useState(110); // Initially display only 3 lines of skills

  const loadMore = () => {
    setVisible(skillsData.length); // Reveal all skills on click
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>My Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.slice(0, visible).map((skill, index) => (
          <div key={index} className={`${styles.skillBadge} ${skill.isTopSkill ? styles.topSkill : ''}`}>
            {skill.isTopSkill && <span className={styles.topSkillStar}>★</span>}
            {skill.name}
          </div>
        ))}
      </div>
      {visible < skillsData.length && (
        <div className={styles.loadMoreContainer}>
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load More
          </button>
        </div>
      )}

      {/* Include the SkillsCarousel component */}
      {/* <SkillsCarousel /> */}
    </section>
  );
};

export default Skills;
