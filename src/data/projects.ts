import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'mobile-pos-system',
    title: 'Mobile POS System',
    subtitle: 'Retail Sales & Inventory Management Platform',
    category: ['mobile'],
    description:
      'A mobile Point of Sale system designed to streamline retail business operations, including sales processing, inventory management, customer management, and reporting.',
    longDescription:
      'Designed and developed to streamline high-velocity retail operations. The solution enables cashier and manager staff to authenticate securely, scan items quickly via barcode/QR readers, issue instant invoices, process payment transactions, maintain dynamic stock thresholds, and access daily and monthly sales reporting metrics.',
    features: [
      'Admin and staff authentication',
      'Barcode and QR code scanning',
      'Invoice generation',
      'Stock management',
      'Product management',
      'Sales processing',
      'Customer management',
      'Daily and monthly sales reports',
      'Responsive mobile interface',
    ],
    technologies: ['Flutter', 'Dart', 'PHP', 'MySQL', 'REST API', 'JSON'],
    image: '/images/projects/pos-system.svg',
    liveUrl: null, // Configurable: enter URL when deployed
    githubUrl: null, // Configurable: enter GitHub repository link
    featured: true,
  },
  {
    id: 'ai-chatbot-application',
    title: 'AI Chatbot Application',
    subtitle: 'Conversational Intelligence Mobile Client',
    category: ['mobile', 'ai'],
    description:
      'An AI-powered chatbot integrating the DeepSeek API to provide conversational AI responses through a simple mobile interface.',
    longDescription:
      'A responsive mobile client delivering intelligent real-time conversational assistance. Features seamless communication with the DeepSeek API, persistent local chat histories using SQLite, multi-language conversational support, structured network error handling, and an intuitive mobile chat interface.',
    features: [
      'AI-powered chat interface',
      'Real-time conversations',
      'Conversation history',
      'API integration',
      'Multi-language support',
      'Error handling',
      'Responsive interface',
    ],
    technologies: ['Flutter', 'Dart', 'DeepSeek API', 'REST API', 'JSON', 'SQLite'],
    image: '/images/projects/ai-chatbot.svg',
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 'ecommerce-website',
    title: 'E-Commerce Website',
    subtitle: 'Full-Stack Digital Commerce Platform',
    category: ['web'],
    description:
      'A full-stack e-commerce website concept for browsing products, managing shopping carts, placing orders, and managing customer accounts.',
    longDescription:
      'A comprehensive full-stack online commerce web application designed for seamless customer navigation and administrative management. Integrates secure user authentication, product catalog with advanced search and filtering, wishlist management, interactive cart and checkout flows, and backend administrative panels for inventory and sales reporting.',
    features: [
      'User registration and login',
      'Product search and filtering',
      'Product catalog',
      'Wishlist',
      'Shopping cart',
      'Checkout process',
      'Order management',
      'Customer dashboard',
      'Admin dashboard',
      'Inventory management',
      'Sales reports',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'PHP', 'MySQL'],
    image: '/images/projects/ecommerce.svg',
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 'corporate-company-website',
    title: 'Corporate Company Website',
    subtitle: 'Responsive Corporate Identity & Services Portal',
    category: ['web'],
    description:
      'A responsive corporate website focused on professional presentation, usability, maintainability, and performance.',
    longDescription:
      'A modern corporate web presence built with React and Tailwind CSS. Focuses on executive brand representation, high performance, cross-device responsiveness, interactive service portfolios, validated contact mechanisms, Google Maps embed for headquarters location, and search engine optimization.',
    features: [
      'Responsive design',
      'Company profile',
      'Services section',
      'Contact form',
      'Image gallery',
      'Google Maps integration',
      'SEO-friendly pages',
      'Performance optimization',
    ],
    technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    image: '/images/projects/corporate-website.svg',
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 'iot-dashboard-system',
    title: 'IoT Dashboard System',
    subtitle: 'Real-Time Sensor Telemetry & Device Monitoring',
    category: ['iot', 'web'],
    description:
      'A real-time dashboard for monitoring connected IoT devices, sensor readings, device status, and analytics.',
    longDescription:
      'A mission-critical monitoring dashboard built to interface with hardware devices and telemetry streams. Ingests and renders real-time sensor metrics over MQTT and HTTP protocols, tracks operational device states, triggers instantaneous alert notifications upon abnormal readings, and delivers historical trend charts.',
    features: [
      'Real-time device monitoring',
      'Sensor data visualization',
      'Device status monitoring',
      'Dashboard analytics',
      'User authentication',
      'Alert notifications',
      'Responsive dashboard',
      'MQTT and HTTP communication support',
    ],
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST API', 'MQTT', 'HTTP'],
    image: '/images/projects/iot-dashboard.svg',
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
];
