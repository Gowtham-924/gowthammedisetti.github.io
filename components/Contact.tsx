import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';

const Contact = () => (
<<<<<<< HEAD
  <section id="contact" className={styles.contactSection}>
    <h2>Contact</h2>
    <p>You can also connect with me on <a href="https://www.linkedin.com/in/gowtham-medisetti/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
    <a href="mailto:medisettigowtham924@gmail.com" className={styles.contactButton}>Get in Touch</a>
    
    <div className={styles.iconLinks}>
      <a href="https://www.linkedin.com/in/gowtham-medisetti/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Gowtham-924" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:gmedisettigowtham924@gmail.com">
        <FaEnvelope />
      </a>
=======
  <section id="contact" className={styles.contactSection} data-aos="fade-up">
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p>If you&apos;d like to reach out to me, please send an email to <strong>gowtham.medisetti@example.com</strong>.</p>
      <p>You can also connect with me on <a href="https://www.linkedin.com/in/gowtham-medisetti" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <button onClick={() => window.location.href="mailto:gowtham.medisetti@example.com"}>Get in Touch</button>
>>>>>>> 4b5fb16b7c02179fc53295c05405e0cf92fbf1cc
    </div>
  </section>
);

export default Contact;
