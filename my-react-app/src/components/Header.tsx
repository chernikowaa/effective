import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import marvelLogo from '../assets/marvel-logo.png';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/characters">
        <img src={marvelLogo} alt="Marvel Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav}>
        <NavLink
          to="/characters"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Characters
        </NavLink>
        <NavLink
          to="/comics"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Comics
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;