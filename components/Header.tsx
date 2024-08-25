import styles from '../styles/Home.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.textContent}>
      <h1 className={styles.name}>Gowtham Medisetti</h1>
      <p className={styles.tagline}>Generative AI Engineer</p>
      <nav>
        <ul className={styles.navLinks}>
          <li><a href="#about">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
