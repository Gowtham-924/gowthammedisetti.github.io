import Image from 'next/image';
import styles from '../styles/Home.module.scss';

const Projects = () => (
  <section id="projects" className={styles.projectsSection} data-aos="fade-up">
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectItem} data-aos="zoom-in">
          <Image 
            src="/images/project1.png" 
            alt="Project 1" 
            className={styles.projectImg} 
            width={400} // Adjust the width to the appropriate size
            height={300} // Adjust the height to the appropriate size
          />
          <h3>LLM-Powered Text Generation for Academic Papers</h3>
          <p>Developed a state-of-the-art generative model using LLAMA, automating content generation for academic papers, which significantly reduced research time.</p>
        </div>
        <div className={styles.projectItem} data-aos="zoom-in">
          <Image 
            src="/images/project2.png" 
            alt="Project 2" 
            className={styles.projectImg} 
            width={400} // Adjust the width to the appropriate size
            height={300} // Adjust the height to the appropriate size
          />
          <h3>Generative Adversarial Networks for Fashion Trend Prediction</h3>
          <p>Created a GAN model to analyze and predict future fashion trends, utilizing historical data, in collaboration with Indiana University.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
