import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Researcher</h3>
              <p>
              I'm an undergraduate researcher at the National Institute of Technology Patna, where I have been engaged since 2022. During this time, I co-authored a journal article titled which was submitted to IEEE Instrumentation and Measurement and published a conference paper at the 2024 International Conference on Signal Processing and Communications (SPCOM).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm a frontend developer skilled in crafting responsive and optimized websites using React.js, HTML, and CSS. I've also designed seamless UIs using Figma.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>ML/DL Developer</h3>
              <p>
              I have developed full-stack ML applications using various machine learning models and algorithms. My work also includes creating RESTful APIs to ensure efficient data processing and seamless integration between the front-end and back-end.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
