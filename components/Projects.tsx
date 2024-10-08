import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Projects = () => (
  <section id="projects" className={styles.projectsSection}>
    <h2>Projects</h2>
    <div className={styles.projectList}>
      <div className={styles.projectItem}>
        <div>
          <h3>LLM-Powered Text Generation for Academic Papers</h3>
          <p>Developed a state-of-the-art generative model using LLAMA, automating content generation for academic papers, which significantly reduced research time.</p>

          <div className={styles.skillsSection}>
            <h4>Skills</h4>
            <div className={styles.skillsList}>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>LLAMA</span>
              <span className={styles.skillTag}>Natural Language Processing (NLP)</span>
              <span className={styles.skillTag}>Machine Learning</span>
            </div>
          </div>

          {/* <div className={styles.tagsSection}>
            <h4>Project Tags:</h4>
            <div className={styles.tagsList}>
              <span className={styles.projectTag}>Generative AI</span>
              <span className={styles.projectTag}>Text Generation</span>
              <span className={styles.projectTag}>Academic Research</span>
            </div>
          </div> */}

          <a href="https://github.com/your-repo-link" className={styles.githubLink} target="_blank" rel="noopener noreferrer">
          View in Github <FaGithub />
          </a>
      

        </div>
      </div>

      <div className={styles.projectItem}>
        <div>
          <h3>Generative Adversarial Networks for Fashion Trend Prediction</h3>
          <p>Created a GAN model to analyze and predict future fashion trends, utilizing historical data, in collaboration with Indiana University.</p>

          <div className={styles.skillsSection}>
            <h4>Skills</h4>
            <div className={styles.skillsList}>
              <span className={styles.skillTag}>GANs</span>
              <span className={styles.skillTag}>Python</span>
              <span className={styles.skillTag}>Data Analysis</span>
              <span className={styles.skillTag}>Fashion Trend Prediction</span>
            </div>
          </div>

          {/* <div className={styles.tagsSection}>
            <h4>Project Tags:</h4>
            <div className={styles.tagsList}>
              <span className={styles.projectTag}>Fashion AI</span>
              <span className={styles.projectTag}>GANs</span>
              <span className={styles.projectTag}>Trend Prediction</span>
            </div>
          </div> */}

<a href="https://github.com/your-repo-link" className={styles.githubLink} target="_blank" rel="noopener noreferrer">
          View in Github <FaGithub />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
