import styles from '../styles/Home.module.scss';

const Achievements = () => (
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
  </section>
);

export default Achievements;
