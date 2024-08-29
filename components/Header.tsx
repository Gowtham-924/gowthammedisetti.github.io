import { useEffect } from 'react';
import styles from '../styles/Home.module.scss';

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`) as HTMLElement | null;
      const nav = document.querySelector(`.${styles.stickyNav}`) as HTMLElement | null;

      if (header && nav) {
        if (window.scrollY > header.offsetHeight) {
          nav.classList.add(styles.sticky);
        } else {
          nav.classList.remove(styles.sticky);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.textContent}>
        <h1 className={styles.name}>Gowtham Medisetti</h1>
        <p className={styles.tagline}>Generative AI Engineer</p>
        <nav className={styles.stickyNav}>
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
};

export default Header;
