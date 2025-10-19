import React from 'react';
import { PROJECTS } from '../constants';
// import ProjectCard from './ProjectCard'; // No longer needed
import InfiniteMenu from '../reacbits/InfiniteMenu/InfiniteMenu'; // Import the new component

const Projects: React.FC = () => {
  // 1. Transform your PROJECTS data into the format InfiniteMenu needs
  const projectItems = PROJECTS.map((project) => ({
    // --- IMPORTANT ---
    // You must adjust these property names to match your PROJECTS object.
    // I'm guessing your 'project' object has keys like 'title', 'description', 
    // 'image', and 'demoUrl' or 'githubUrl'.
    //
    // For example, if your object uses 'imageUrl', change 'image: project.image'
    // to 'image: project.imageUrl'.

    title: project.title,
    description: project.description,
    image: project.imageUrl, // <-- CHECK THIS
    link: project.liveUrl, // <-- CHECK THIS
  }));

  return (
    <section id="projects" className="wrapper mx-auto ">
      <h2 className="text-3xl font-bold text-slate-100 mb-8 flex items-center">
        <span className="text-cyan-400 font-mono mr-2 text-2xl">03.</span>
        Some Things I've Built
        <span className="h-px bg-slate-600 flex-grow ml-4"></span>
      </h2>

      {/* 2. Replace the grid with the InfiniteMenu wrapper and component */}
      <div style={{ height: '600px', position: 'relative' }}>
        <InfiniteMenu items={projectItems} />
      </div>
    </section>
  );
};

export default Projects;