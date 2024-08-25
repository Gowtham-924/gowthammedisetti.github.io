import { useState } from 'react';
import styles from '../styles/Home.module.scss';

const skillsData = [
  { title: 'Generative AI & NLP', icon: '🤖', skills: ['GPT Series', 'Transformers', 'Language Models', 'Text Generation'] },
  { title: 'Machine Learning & AI', icon: '📊', skills: ['TensorFlow', 'PyTorch', 'Model Optimization', 'Data Augmentation'] },
  { title: 'Cloud & DevOps', icon: '☁️', skills: ['Azure OpenAI', 'AWS', 'Docker', 'Kubernetes'] },
  { title: 'Programming Languages', icon: '💻', skills: ['Python', 'Java (OOP)', 'JavaScript'] },
  { title: 'Data Mining & Tools', icon: '🔍', skills: ['SQL', 'Redis', 'MongoDB', 'Web Scraping'] },
  { title: 'Frameworks & Libraries', icon: '📚', skills: ['Spring Boot', 'React.js', 'scikit-learn'] },
  // Add more cards as needed
];

const Skills = () => {
  const [visible, setVisible] = useState(3); // Initially display only 3 cards

  const loadMore = () => {
    setVisible(skillsData.length); // Reveal all cards on click
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Technical Skills</h2>
      <div className={styles.skillsGrid}>
        {skillsData.slice(0, visible).map((category, index) => (
          <div key={index} className={styles.skillCard}>
            <h3>
              <span className={styles.skillIcon}>{category.icon}</span> 
              {category.title}
            </h3>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {visible < skillsData.length && (
        <button className={styles.loadMoreButton} onClick={loadMore}>
          Load More
        </button>
      )}
    </section>
  );
};

export default Skills;
