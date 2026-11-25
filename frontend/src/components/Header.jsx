// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={handleNavClick}>
          Sujith Ganeshuni
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li><NavLink to="/" end className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>About</NavLink></li>
            <li><NavLink to="/portfolio" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Portfolio</NavLink></li>
            <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : styles.navLink}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Hamburger button */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNavList}>
          <li><NavLink to="/" end className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={handleNavClick}>About</NavLink></li>
          <li><NavLink to="/portfolio" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={handleNavClick}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({isActive}) => isActive ? styles.activeLink : styles.navLink} onClick={handleNavClick}>Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;