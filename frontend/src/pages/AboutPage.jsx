import React from 'react';
import styles from './AboutPage.module.css';
import AboutHero from '../components/AboutHero';
import Skills from '../components/Skills';
import Timeline from '../components/Timeline';
import PersonalDetails from '../components/PersonalDetails';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <AboutHero />
      <Skills />
      <Timeline />
      <PersonalDetails />
      {/* We will add the other sections (Skills, Timeline, etc.) here */}
    </div>
  );
};

export default AboutPage;