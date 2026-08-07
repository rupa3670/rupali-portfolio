import About from '@/components/About';
import Contacts from '@/components/Contact';
import Home from '@/components/Home';
import ProjectsSection from '@/components/ProjectSection';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-gray-50 dark:bg-zinc-950 '>
      <Home/>
      <ProjectsSection/>
      <About/>
      <Contacts/>
    </div>
  );
};

export default HomePage;