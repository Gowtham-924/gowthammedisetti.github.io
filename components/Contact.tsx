import styles from '../styles/Home.module.scss';

const Contact = () => (
  <section id="contact" className={styles.contactSection} data-aos="fade-up">
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Contact</h2>
      <p>If you&apos;d like to reach out to me, please send an email to <strong>gowtham.medisetti@example.com</strong>.</p>
      <p>You can also connect with me on <a href="https://www.linkedin.com/in/gowtham-medisetti" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      <button onClick={() => window.location.href="mailto:gowtham.medisetti@example.com"}>Get in Touch</button>
    </div>
  </section>
);

export default Contact;
