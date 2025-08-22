// src/components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Your Name
        </Link>
        <nav>
          <ul className={styles.navList}>
            <li><NavLink to="/" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>About</NavLink></li>
            <li><NavLink to="/portfolio" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Portfolio</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;