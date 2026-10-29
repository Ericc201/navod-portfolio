# Navod Lakshitha — Premium Software Engineer Portfolio

A production-grade, high-performance personal portfolio website built for **Navod Lakshitha** using **React 19**, **TypeScript**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

Designed with a modern developer aesthetic: dark charcoal background with subtle navy tones, electric blue and violet accents, glassmorphic surfaces, animated interactive navigation, and full responsive design.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing & Verbatim Module Syntax)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Animations**: [Framer Motion](https://motion.dev/) (with `prefers-reduced-motion` support)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand vectors
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/) with automated fallback to direct email client

---

## 📁 Project Structure

```text
├── public/
│   ├── cv/
│   │   └── Navod_Lakshitha_CV.pdf       # Downloadable CV document
│   ├── images/
│   │   ├── profile.jpg                  # Profile portrait of Navod Lakshitha
│   │   └── projects/                    # Vector preview mockups for all 5 projects
│   │       ├── pos-system.svg
│   │       ├── ai-chatbot.svg
│   │       ├── ecommerce.svg
│   │       ├── corporate-website.svg
│   │       └── iot-dashboard.svg
│   └── favicon.svg                      # Custom NL monogram vector favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                   # Sticky blur navigation, active scrollspy, mobile menu
│   │   ├── Hero.tsx                     # Headline, dynamic specialty ticker, code snippet card
│   │   ├── About.tsx                    # Split portrait card, background narrative, core pillars
│   │   ├── Skills.tsx                   # Filterable technology matrix (no fake percentages)
│   │   ├── Experience.tsx               # Elevate Integrated Technologies internship timeline
│   │   ├── Projects.tsx                 # Filterable showcase grid with modal triggers
│   │   ├── ProjectCard.tsx              # Clean preview cards with tech badges and action links
│   │   ├── ProjectModal.tsx             # Accessible details dialog with Esc listener & scroll lock
│   │   ├── Education.tsx                # CMU BSc (Hons) In Progress & Higher Diploma timeline
│   │   ├── Contact.tsx                  # Validated contact form, direct mailto fallback, copy buttons
│   │   ├── Footer.tsx                   # Compact brand footer, dynamic copyright year, back-to-top
│   │   ├── SectionHeading.tsx           # Reusable section title with badge and gradient text
│   │   ├── ScrollToTop.tsx              # Floating scroll-to-top button
│   │   └── Icons.tsx                    # Accessible SVG icons (GitHub, LinkedIn)
│   ├── config/
│   │   └── site.ts                      # Central site configuration, links, phone, email, CV path
│   ├── data/
│   │   ├── skills.ts                    # Exact categorized technical competencies
│   │   ├── experience.ts                # Industry internship history and achievements
│   │   ├── education.ts                 # Formal qualifications and statuses
│   │   └── projects.ts                  # All 5 projects with descriptions, features, and tech stacks
│   ├── hooks/
│   │   └── useActiveSection.ts          # Scroll position tracking for navigation links
│   ├── types/
│   │   └── index.ts                     # Strict TypeScript interfaces and types
│   ├── App.tsx                          # Root portfolio layout
│   ├── index.css                        # Tailwind v4 configuration, theme base, scrollbars
│   └── main.tsx                         # React 19 root bootstrap
├── .env.example                         # Template for EmailJS service configuration
├── .gitignore                           # Git ignore rules for node_modules, build dist, .env
├── package.json                         # Dependencies and build scripts
├── tsconfig.json                        # TypeScript root project references
└── vite.config.ts                       # Vite configuration with Tailwind CSS v4 plugin
```

---

## 🚀 Getting Started

### 1. Prerequisites

- **Node.js**: v18.0.0 or later (v20+ or v24 recommended)
- **npm**: v9.0.0 or later

### 2. Installation

Clone or open the repository folder, then install dependencies:

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

This runs TypeScript type checking (`tsc -b`) and bundles the static production assets into the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Configuration Guide

### How to Update Personal Information & Links

All personal contact details, social URLs, and paths are centrally defined in [`src/config/site.ts`](src/config/site.ts):

```typescript
export const SITE_CONFIG = {
  name: 'Navod Lakshitha',
  email: 'navodlakshitha2038@gmail.com',
  phone: '0752302180',
  github: 'https://github.com/Ercc201',
  linkedin: 'https://linkedin.com/in/navod-lakshitha',
  cvPath: '/cv/Navod_Lakshitha_CV.pdf',
  profileImage: '/images/profile.jpg',
  // ...
};
```

### How to Replace the Profile Photo

1. Place your photo inside `public/images/` (e.g. `public/images/profile.jpg`).
2. If your filename is different, update `profileImage` in [`src/config/site.ts`](src/config/site.ts).
3. The layout automatically handles aspect ratios, high-DPI scaling, and includes an automatic fallback if the image path is temporarily unreachable.

### How to Replace or Update the CV

1. Place your PDF file in `public/cv/Navod_Lakshitha_CV.pdf`.
2. The download button in the navigation header and hero section will immediately serve this document with the correct `download` attribute.

### How to Configure EmailJS for the Contact Form

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
2. Enter your credentials from your [EmailJS Dashboard](https://dashboard.emailjs.com/):
   ```env
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
3. Restart your dev server (`npm run dev`).
4. **Fallback Behavior**: If these keys are not set, the form will not fake success; instead, it validates the message and presents a one-click button that launches your visitor's default email client pre-filled with the message content!

### How to Add or Edit Projects

Open [`src/data/projects.ts`](src/data/projects.ts). Each project conforms to the `Project` type with configurable fields:
- `title` & `subtitle`
- `category`: array of `'web' | 'mobile' | 'ai' | 'iot'`
- `description` & `longDescription`
- `features`: array of capability bullet points
- `technologies`: array of technology names
- `image`: path to preview graphic or screenshot
- `liveUrl`: URL string or `null` (buttons are hidden automatically when `null`)
- `githubUrl`: URL string or `null` (buttons are hidden automatically when `null`)

---

## 🚢 Deployment Instructions

### Deploy to Vercel

1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Vite**.
5. Add any optional environment variables (`VITE_EMAILJS_*`).
6. Click **Deploy**.

### Deploy to Netlify

1. Push your repository to GitHub.
2. Log into [Netlify](https://www.netlify.com/) and choose **Add new site** > **Import an existing project**.
3. Set the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy Site**.

### Deploy to GitHub Pages

1. In `vite.config.ts`, if deploying to `https://<username>.github.io/<repo-name>/`, set `base`:
   ```typescript
   export default defineConfig({
     base: '/<repo-name>/',
     plugins: [tailwindcss(), react()],
   })
   ```
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.

---

## 📄 License & Attribution

Built for Navod Lakshitha. Free to use, adapt, and deploy.
