import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'Code2',
    skills: ['C++', 'Java', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Layout',
    skills: ['React.js', 'TypeScript', 'Vite', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: 'Smartphone',
    skills: ['Flutter', 'Dart'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: 'Server',
    skills: ['PHP', 'Node.js with Express.js', 'Java'],
  },
  {
    id: 'frameworks-libraries',
    title: 'Frameworks & Libraries',
    icon: 'Layers',
    skills: ['React.js', 'Tailwind CSS', 'Flutter', '.NET Framework'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'SQLite', 'phpMyAdmin'],
  },
  {
    id: 'apis-communication',
    title: 'APIs & Communication',
    icon: 'Radio',
    skills: ['REST API', 'JSON', 'MQTT', 'HTTP'],
  },
  {
    id: 'development-tools',
    title: 'Development Tools',
    icon: 'Wrench',
    skills: [
      'VS Code',
      'Visual Studio',
      'NetBeans',
      'XAMPP',
      'GitHub',
      'Postman',
      'MQTT Explorer',
      'Android Studio',
      'WebStorm',
    ],
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    icon: 'Terminal',
    skills: ['Windows', 'Ubuntu Linux (basic)'],
  },
];

// Highlighted skills for Hero section badges
export const HERO_TECH_BADGES = [
  { name: 'React', color: 'from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30' },
  { name: 'TypeScript', color: 'from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/30' },
  { name: 'Flutter', color: 'from-sky-500/20 to-cyan-500/20 text-sky-400 border-sky-500/30' },
  { name: 'PHP', color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30' },
  { name: 'MySQL', color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30' },
  { name: 'MQTT', color: 'from-violet-500/20 to-fuchsia-500/20 text-violet-400 border-violet-500/30' },
];
