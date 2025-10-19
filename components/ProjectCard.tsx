import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon } from './icons/Icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a 
      href={project.liveUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
      aria-label={`View live demo of ${project.title}`}
    >
      <article className="flex flex-col h-full">
        <div className="overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <ExternalLinkIcon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
          </div>
          <p className="text-slate-400 mb-4 flex-grow">{project.description}</p>
        </div>
      </article>
    </a>
  );
};

export default ProjectCard;