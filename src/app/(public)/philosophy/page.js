import React from 'react';
import PhilosophyheroSection from './_Component/PhilosophyHero';
import AboutHero from './_Component/AboutSection';
import AboutImpact from './_Component/OurImpect';

export default function page() {
  return (
    <div>
      <PhilosophyheroSection />
      <AboutHero />
      <AboutImpact />
    </div>
  );
}
