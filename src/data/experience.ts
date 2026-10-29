import type { ExperienceItem } from '../types';

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'elevate-internship',
    role: 'Software Engineering Intern',
    company: 'Elevate Integrated Technologies',
    period: 'February – August 2026',
    duration: '6 Months',
    isCurrent: false, // Explicitly completed, not current
    responsibilities: [
      'Developed responsive web applications using React.js and Tailwind CSS.',
      'Built mobile applications using Flutter and Dart.',
      'Developed e-commerce systems and corporate websites.',
      'Designed IoT dashboards for real-time device monitoring.',
      'Integrated REST APIs and external AI services.',
      'Worked with PHP, MySQL, ASP.NET, HTML, CSS, JavaScript, and JSON.',
      'Utilized modern developer toolchains including GitHub, Postman, MQTT Explorer, VS Code, Android Studio, WebStorm, Visual Studio, FortiClient VPN, and IIS Manager.',
    ],
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Flutter',
      'Dart',
      'PHP',
      'MySQL',
      'ASP.NET',
      'JavaScript',
      'REST APIs',
      'MQTT',
      'JSON',
    ],
    tools: [
      'GitHub',
      'Postman',
      'MQTT Explorer',
      'VS Code',
      'Android Studio',
      'WebStorm',
      'Visual Studio',
      'FortiClient VPN',
      'IIS Manager',
    ],
  },
];
