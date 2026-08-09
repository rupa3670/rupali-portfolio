import About from '@/components/About';
import Contacts from '@/components/Contact';
import Education from '@/components/Educations';
import Home from '@/components/Home';
import ProjectsSection from '@/components/ProjectSection';
import Skills from '@/components/Skills';
import React from 'react';

const HomePage = () => {
  return (
    <div className='bg-gray-50 dark:bg-zinc-950 '>
      <Home/>
       <About/>
       
       <Education/>
       <Skills/>
      <ProjectsSection/>
     
      <Contacts/>
    </div>
  );
};

export default HomePage;