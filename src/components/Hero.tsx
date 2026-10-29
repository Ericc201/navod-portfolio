import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  FileDown,
  Sparkles,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  Code2,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { HERO_TECH_BADGES } from '../data/skills';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  // Cycling titles
  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % SITE_CONFIG.titles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  const codeSnippet = `const engineer: DeveloperProfile = {
  name: "${SITE_CONFIG.name}",
  role: "${SITE_CONFIG.role}",
  location: "${SITE_CONFIG.location}",
  education: "BSc (Hons) Software Engineering (CMU)",
  internship: "Elevate Integrated Technologies",
  focus: ["Web Apps", "Mobile Apps", "IoT Dashboards", "AI APIs"],
  stack: ["React", "TypeScript", "Flutter", "PHP", "MySQL", "MQTT"],
  availableForWork: true
};`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: elPos, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-violet-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-600/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status & Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/80 shadow-sm backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                Hi, I'm <strong className="text-white font-semibold">{SITE_CONFIG.name}</strong>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {SITE_CONFIG.location}
              </span>
            </div>

            {/* Dynamic Specialty Switcher */}
            <div className="h-8 flex items-center mb-3">
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {shouldReduceMotion ? (
                  SITE_CONFIG.role
                ) : (
                  <motion.span
                    key={specialtyIndex}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    {SITE_CONFIG.titles[specialtyIndex]}
                  </motion.span>
                )}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Building Digital Experiences That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                Make an Impact.
              </span>
            </h1>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl mb-8 font-normal">
              {SITE_CONFIG.heroBio}
            </p>

            {/* Primary & Secondary Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:via-blue-500 hover:to-violet-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </button>

              <a
                href={SITE_CONFIG.cvPath}
                download={SITE_CONFIG.cvFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 shadow-sm transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download My CV</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto text-center text-sm font-semibold text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors px-2 py-1"
              >
                Contact Me
              </button>
            </div>

            {/* Technology Badges */}
            <div className="w-full pt-6 border-t border-slate-800/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Core Stack Highlights
              </p>
              <div className="flex flex-wrap gap-2.5">
                {HERO_TECH_BADGES.map((badge) => (
                  <span
                    key={badge.name}
                    className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${badge.color} border shadow-xs`}
                  >
                    {badge.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Portrait & Clean Developer Card */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6"
          >
            {/* Professional Portrait with Illuminated Border Frame */}
            <div className="relative group">
              {/* Outer gradient glow halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-500" />
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 shadow-2xl">
                <img
                  src={SITE_CONFIG.profileImage}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to monogram placeholder if image is missing
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-300">
                          <span class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-violet-400">${SITE_CONFIG.monogram}</span>
                          <span class="text-xs font-semibold text-slate-400 mt-2">${SITE_CONFIG.name}</span>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Subtle overlay gradient on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating pill over image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-[11px] font-semibold text-slate-200">
                      Software Engineer
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">
                    CMU / ICBT
                  </span>
                </div>
              </div>
            </div>

            {/* Clean, Tasteful TypeScript Profile Config Card (No fake CLI terminal) */}
            <div className="w-full max-w-md rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/70 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 ml-1.5 flex items-center gap-1">
                    <Code2 className="w-3 h-3 text-cyan-400" />
                    developer.config.ts
                  </span>
                </div>

                <button
                  type="button"
                  onClick={copyCode}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-800/80"
                  title="Copy configuration snippet"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code snippet body */}
              <div className="p-4 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto bg-[#080C14]">
                <p>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-300">engineer</span>:{' '}
                  <span className="text-emerald-400">DeveloperProfile</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-amber-300">"{SITE_CONFIG.name}"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">internship:</span>{' '}
                  <span className="text-amber-300">"Elevate Integrated Technologies"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">education:</span>{' '}
                  <span className="text-amber-300">"BSc (Hons) SE (CMU)"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">coreStack:</span> [
                  <span className="text-cyan-300">"React"</span>,{' '}
                  <span className="text-cyan-300">"Flutter"</span>,{' '}
                  <span className="text-cyan-300">"PHP"</span>,{' '}
                  <span className="text-cyan-300">"IoT"</span>],
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span>{' '}
                  <span className="text-emerald-400">"Ready for impact"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

