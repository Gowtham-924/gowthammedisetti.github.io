import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from '../styles/Home.module.scss';

const Contact = () => (
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
    </div>
  </section>
);

export default Contact;
