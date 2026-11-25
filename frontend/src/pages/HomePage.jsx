import React from 'react';
import Hero from '../components/Hero';
import SkillsSection from '../components/SkillsSection';
import FeaturedProjects from '../components/FeaturedProjects';
import ContactCTA from '../components/ContactCTA';

const HomePage = () => {
  return (
    <>
      <Hero />
      <SkillsSection />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
};

export default HomePage;