import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Smartphone,
  Cpu,
  Database,
  CheckCircle,
  FileText,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { SectionHeading } from './SectionHeading';

export const About: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const coreFocusAreas = [
    {
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      desc: 'Developing responsive web applications with React.js, Tailwind CSS, PHP, and modern backend architectures.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Solutions',
      desc: 'Building cross-platform mobile experiences utilizing Flutter, Dart, and local SQLite data caching.',
    },
    {
      icon: Cpu,
      title: 'IoT & Real-Time Telemetry',
      desc: 'Architecting real-time monitoring dashboards streaming sensor data over MQTT and HTTP communication protocols.',
    },
    {
      icon: Database,
      title: 'APIs & Database Integrations',
      desc: 'Integrating RESTful services, external AI APIs like DeepSeek, and robust relational databases with MySQL.',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Navod"
          title="Engineering Solutions With Precision & Purpose"
          subtitle="A dedicated software engineering undergraduate with proven industry internship experience building scalable web apps, mobile systems, and real-time IoT solutions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Visual Profile Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="h-full rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              {/* Subtle decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div>
                {/* Photo & Quick Intro */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-md bg-slate-800 shrink-0">
                    <img
                      src={SITE_CONFIG.profileImage}
                      alt={SITE_CONFIG.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{SITE_CONFIG.name}</h3>
                    <p className="text-xs text-cyan-400 font-medium">Software Engineer</p>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{SITE_CONFIG.location}</span>
                    </div>
                  </div>
                </div>

                {/* Key Facts based strictly on user data */}
                <div className="space-y-3.5 pt-4 border-t border-slate-800/80">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">Undergraduate Degree</p>
                      <p className="text-xs text-slate-400">
                        BSc (Hons) Software Engineering (CMU) — In Progress at ICBT Campus
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Briefcase className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">Industry Experience</p>
                      <p className="text-xs text-slate-400">
                        Six-Month Software Engineering Internship at Elevate Integrated Technologies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-white">Core Philosophy</p>
                      <p className="text-xs text-slate-400">
                        Clean code architecture, maintainability, and user-centric interfaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">Need complete background?</span>
                <a
                  href={SITE_CONFIG.cvPath}
                  download={SITE_CONFIG.cvFileName}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Full CV</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & Focus Areas */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Bio Narrative Card */}
            <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>Professional Background</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                <p>
                  I am a Software Engineering undergraduate currently pursuing my{' '}
                  <strong className="text-white font-semibold">
                    BSc (Hons) in Software Engineering
                  </strong>{' '}
                  awarded by Cardiff Metropolitan University (CMU) at ICBT Campus, Colombo. My educational journey includes a completed{' '}
                  <strong className="text-white font-semibold">Higher Diploma in Computing and Software Engineering</strong>{' '}
                  and comprehensive foundation coursework.
                </p>

                <p>
                  During my{' '}
                  <strong className="text-white font-semibold">
                    six-month Software Engineering internship at Elevate Integrated Technologies
                  </strong>{' '}
                  (February to August 2026), I contributed across the full development lifecycle: engineering responsive web applications with React and Tailwind CSS, building cross-platform mobile solutions using Flutter and Dart, developing corporate web presences, and designing real-time IoT monitoring dashboards.
                </p>

                <p>
                  I have hands-on experience integrating REST APIs, external AI services, and database-driven workflows using PHP and MySQL. I take pride in creating clean, maintainable, and user-friendly software that solves practical problems effectively.
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-6 mt-6 border-t border-slate-800/80">
                {[
                  'Clean & Maintainable Code',
                  'Cross-Platform Mobile Dev',
                  'REST & AI API Integrations',
                  'Real-Time IoT Dashboards',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Focus Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreFocusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">{area.title}</h4>
                    <p className="text-xs text-slate-400 leading-normal">{area.desc}</p>
                  </div>
                );
              })}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

