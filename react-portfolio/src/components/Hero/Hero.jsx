
import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../assets/Hero/heroImage.png"; 

export const Hero = () => {
  return (
    <section className={styles.container}id="about">
      <div className={styles.content}>
        <h1 className={styles.title1}>Hello, I'm Khaoula</h1>
        <h1 className={styles.title2}>Developer</h1>
        <p className={styles.description}>
        An ambitious and hardworking student with strong technical, 
        logical and interpersonal skills. Eager to be challenged beyond
         the familiar in order to grow and expand on skillset and seeking 
         to leverage his skills in a professional environment.
        </p>
        <a href="mailto:khaoula.khoudali@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
