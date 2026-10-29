import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, Clock, CheckCircle2, Building, Wrench } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';
import { SectionHeading } from './SectionHeading';

export const Experience: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Professional Experience"
          title="Practical Engineering in Industry"
          subtitle="Real-world experience delivering web applications, mobile platforms, real-time IoT dashboards, and REST API integrations."
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-md overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Internship (Completed)
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-cyan-400">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 bg-slate-800/40 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                  <span className="flex items-center gap-1.5 font-medium text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Responsibilities and Achievements */}
              <div className="py-6 border-b border-slate-800">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">
                  Responsibilities & Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    Technologies & Stacks Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Developer Tools */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <Wrench className="w-3 h-3 text-slate-400" />
                    Tooling & Environments
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

