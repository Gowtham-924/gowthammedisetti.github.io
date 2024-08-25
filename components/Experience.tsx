import React from 'react';
import Image from 'next/image';
import styles from './../styles/Home.module.scss';

const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSection}>
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
    </section>
  );
}

export default Experience;
