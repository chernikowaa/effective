import React from 'react';
import styles from './Footer.module.css';
import marvelLogo from '../assets/marvel-logo.png';

const Footer: React.FC = () => {


  return (
    <footer className={styles.footer}>
      <img src={marvelLogo} alt="Marvel Logo" className={styles.logo} />
      <p>
        Data provided by Marvel. © 2024 MARVEL. 
      </p>
      <p>
        <a href="https://developer.marvel.com">developer.marvel.com</a>
      </p>
    </footer>
  );
};

export default Footer;