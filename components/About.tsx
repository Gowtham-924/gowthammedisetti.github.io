import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const About = () => (
  <section id="about" className={styles.aboutSection}>
    <div className={styles.aboutContent}>
      <div className={styles.aboutImage}>
        <Image src="/images/profile.jpg" alt="Gowtham Medisetti" className={styles.profileImg} width={200} height={200} />
      </div>
      <div className={styles.divider}></div> {/* Divider */}
      <div className={styles.aboutText}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p>
        I am a <strong>Generative AI Engineer</strong> with a <strong>Master’s in Computer Science</strong> from UNT and over 5 years of experience. 
        As the first author, I <a href="https://yunhefeng.me/lab/Publications/material/LitAI.pdf" target="_blank" rel="noopener noreferrer">published research</a> in the <strong>IEEE MIPR 2024</strong> conference, where my work was recognized for its impact. 
        My expertise spans Generative models, NLP, and integrating AI into large-scale systems. 
        Honored as an<a href="https://research.unt.edu/magazine/ai-student-scholars" target="_blank" rel="noopener noreferrer"> AI Student Scholar</a> at UNT, I’m committed to pushing AI boundaries to solve complex challenges. 
        I hold Generative AI certifications from <a href="https://shorturl.at/Y7eyX" target="_blank" rel="noopener noreferrer">Oracle</a> and <a href="https://shorturl.at/uI6Mp" target="_blank" rel="noopener noreferrer">Databricks</a>, with strong hands-on expertise in Azure OpenAI, complementing my solid foundation in software engineering and cloud platforms including AWS.
</p>       
  
        <div className={styles.certifications}>
        <a href="https://shorturl.at/8JaBt" target="_blank" rel="noopener noreferrer">
    <img src="/images/IEEE-logo.png" alt="IEEE MIPR 2023" />
  </a>
  <a href="https://shorturl.at/LE0vY" target="_blank" rel="noopener noreferrer">
    <img  src="/images/LitAI-logo.png"  alt="GitHub" />
  </a>
  <a href="https://shorturl.at/Y7eyX" target="_blank" rel="noopener noreferrer">
    <img src="/images/oracle-badge.png" alt="Oracle Certification" />
  </a>
  <a href="https://shorturl.at/uI6Mp" target="_blank" rel="noopener noreferrer">
    <img  src="/images/databricks-badge.png"  alt="Databricks Certification" />
  </a>
  <a href="https://shorturl.at/GykoP" target="_blank" rel="noopener noreferrer">
    <img  src="/images/UNT-research-logo.png"  alt="AI student scholar" />
  </a>
</div>


      </div>
    </div>
  </section>
);

export default About;
