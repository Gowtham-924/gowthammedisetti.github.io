import { FaMedal, FaTrophy, FaCertificate } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';

const Achievements = () => (
<<<<<<< HEAD
  <section id="achievements" className={styles.achievementsSection}>
    <h2>Achievements</h2>
    <ul className={styles.achievementList}>
      <li className={styles.achievementItem}>
        <FaMedal className={styles.achievementIcon} />
        <span className={styles.achievementText}>
          Oracle Cloud Infrastructure 2024 Generative AI Professional Certification
        </span>
      </li>
      <li className={styles.achievementItem}>
        <FaTrophy className={styles.achievementIcon} />
        <span className={styles.achievementText}>
          First author of the &apos;LitAI&apos; paper accepted at the 2024 IEEE MIPR Conference
        </span>
      </li>
      <li className={styles.achievementItem}>
        <FaCertificate className={styles.achievementIcon} />
        <span className={styles.achievementText}>
          Developed a cutting-edge generative model for academic text generation
        </span>
      </li>
      <li className={styles.achievementItem}>
        <FaMedal className={styles.achievementIcon} />
        <span className={styles.achievementText}>
          Academy Accreditation - Generative AI Fundamentals from Databricks
        </span>
      </li>
      <li className={styles.achievementItem}>
        <FaTrophy className={styles.achievementIcon} />
        <span className={styles.achievementText}>
          Top contributor to AI-driven projects at Phenom Pvt. Ltd.
        </span>
      </li>
    </ul>
=======
  <section id="achievements" className={styles.achievementsSection} data-aos="fade-up">
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Achievements</h2>
      <ul>
        <li>Oracle Cloud Infrastructure 2024 Generative AI Professional Certification</li>
        <li>First author of the &apos;LitAI&apos; paper accepted at the 2024 IEEE MIPR Conference</li>
        <li>Developed a cutting-edge generative model for academic text generation</li>
        <li>Academy Accreditation - Generative AI Fundamentals from Databricks</li>
        <li>Top contributor to AI-driven projects at Phenom Pvt. Ltd.</li>
      </ul>
    </div>
>>>>>>> 4b5fb16b7c02179fc53295c05405e0cf92fbf1cc
  </section>
);

export default Achievements;
