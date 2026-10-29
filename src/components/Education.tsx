import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { EDUCATION_LIST } from '../data/education';
import { SectionHeading } from './SectionHeading';

export const Education: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#090D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Formal Training"
          subtitle="A structured academic foundation in software engineering, computing systems, and algorithmic fundamentals."
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8 relative">
            {EDUCATION_LIST.map((item, index) => {
              const isInProgress = item.status === 'In Progress';
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 shadow-xl backdrop-blur-md hover:border-slate-700 transition-colors">
                      {/* Status Badge */}
                      <div className={`flex items-center gap-2 mb-2 ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
                        {isInProgress ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            In Progress (Current)
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            <CheckCircle2 className="w-3 h-3" />
                            Completed
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">{item.degree}</h3>
                      <p className="text-sm font-medium text-cyan-400 mb-2">{item.institution}</p>

                      <div
                        className={`flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-3 ${
                          isEven ? 'sm:justify-end' : 'sm:justify-start'
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {item.location}
                        </span>
                      </div>

                      {item.details && (
                        <p className="text-xs text-slate-400 leading-relaxed">{item.details}</p>
                      )}
                    </div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-500/60 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden sm:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
