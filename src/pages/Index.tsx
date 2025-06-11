
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Timeline from '../components/Timeline';
import Education from '../components/Education';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Timeline />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
