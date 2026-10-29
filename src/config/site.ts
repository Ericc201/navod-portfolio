export const SITE_CONFIG = {
  name: 'Navod Lakshitha',
  shortName: 'Navod',
  monogram: 'NL',
  role: 'Software Engineer',
  titles: [
    'Software Engineer',
    'Full-Stack Developer',
    'Mobile App Developer',
    'IoT Enthusiast',
  ],
  location: 'Colombo, Sri Lanka',
  tagline: 'Building Digital Experiences That Make an Impact.',
  heroBio:
    "I'm a Software Engineering undergraduate and developer passionate about building modern web applications, mobile solutions, AI-powered applications, and real-time IoT systems.",
  
  // Contact & Socials (easily configurable)
  email: 'navodlakshitha2038@gmail.com',
  phone: '0752302180',
  phoneFormatted: '+94 75 230 2180',
  github: 'https://github.com/Ercc201',
  linkedin: 'https://linkedin.com/in/navod-lakshitha',
  
  // Local asset paths
  cvPath: '/cv/Navod_Lakshitha_CV.pdf',
  cvFileName: 'Navod_Lakshitha_CV.pdf',
  profileImage: '/images/profile.jpg',

  // EmailJS configuration (read from Vite env vars)
  // To activate, add these to a .env file:
  // VITE_EMAILJS_SERVICE_ID=your_service_id
  // VITE_EMAILJS_TEMPLATE_ID=your_template_id
  // VITE_EMAILJS_PUBLIC_KEY=your_public_key
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },

  // Navigation Links
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};

