# Sinchana Nandheesha — Portfolio

A premium, modern personal portfolio website for a Computer Science Engineer.  
Built with React + Vite, Tailwind CSS v3, and Framer Motion.

## Features

- Dark / Light mode toggle
- Smooth animations (Framer Motion)
- Glassmorphism card design
- Fully responsive (mobile, tablet, desktop)
- Modular architecture — easy to edit each section
- Project detail modals with tech stack & links
- Animated experience timeline
- SEO-friendly meta tags

## Folder Structure

```
sinchana-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── sections/          # Hero, About, Skills, Experience, Projects,
│   │   │                      # Stats, Exploring, Research, Certifications,
│   │   │                      # Contact, Footer
│   │   └── ui/                # NavBar, SectionWrapper, SocialIcons, ThemeToggle
│   ├── data/
│   │   └── portfolio.js       ← Edit ALL content here
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── package.json
```

## Installation

```bash
# Clone
git clone https://github.com/your-username/sinchana-portfolio.git
cd sinchana-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# Open http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview production build locally
```

## Deploy to Vercel

**Option A — Dashboard (easiest)**
1. Push to GitHub
2. Import at vercel.com → "Add New Project"
3. Vite is auto-detected — click Deploy

**Option B — CLI**
```bash
npm install -g vercel
vercel
```

## Customization

Edit `src/data/portfolio.js` to update all content:
personal info, education, skills, experience, projects, research, certifications.

To add a profile image, add an `<img>` tag in `src/components/sections/Hero.jsx`.

## Tech Stack

| | |
|---|---|
| React 18 + Vite | Framework & build |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Syne + DM Sans + JetBrains Mono | Typography |

MIT License
