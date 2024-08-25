import Head from 'next/head';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gowtham Medisetti | Generative AI Engineer</title>
        <meta name="description" content="Professional portfolio of Gowtham Medisetti, Generative AI Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
