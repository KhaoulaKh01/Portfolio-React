// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footerWrapper}>
        <h1 className={styles.logo}>Khaoula Khoudali</h1>
        <div className={styles.socialMediaIcons}>
          <a
            href="https://www.linkedin.com/in/khaoula-khoudali-678132231"
            target="_blank"
            rel="khaoula khoudali"
            className={styles.socialMediaIcon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/2709725KHOUDALI"
            target="_blank"
            rel="khaoula khoudali"
            className={styles.socialMediaIcon}
          >
            <FaGithub />
          </a>
          <a
            href="mailto:khaoula.khoudali@gmail.com"
            className={styles.socialMediaIcon}
          >
            <FaEnvelope />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Khaoula Khoudali. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
