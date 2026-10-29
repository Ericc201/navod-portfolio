import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Info } from 'lucide-react';
import type { Project } from '../types';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect, index }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 overflow-hidden backdrop-blur-sm"
    >
      <div>
        {/* Project Visual Preview Thumbnail */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden cursor-pointer group-hover:brightness-105 transition-all"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-2 group-hover:scale-102 transition-transform duration-500"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent pointer-events-none" />

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Quick View Button Icon */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 border border-slate-700 text-slate-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Info className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h3
            onClick={() => onSelect(project)}
            className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          {project.subtitle && (
            <p className="text-xs font-medium text-slate-400 mt-1 mb-3">
              {project.subtitle}
            </p>
          )}

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/40 text-slate-400 border border-slate-800">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-6 pb-6 pt-3 border-t border-slate-800/60 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
        >
          <span>View Details & Features</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Optional External Links if provided */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};
