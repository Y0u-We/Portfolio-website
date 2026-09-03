 **Yuvraj Sunar** - Data Analyst Portfolio

A personal portfolio website built to showcase my work as a Data Analyst — Power BI dashboards, campaign analytics case studies, and independent data projects — in one clean, responsive site.

Live site: https://portfolio-website-two-sigma-74.vercel.app/

**About**

I'm a Data Analyst with hands-on experience building Power BI dashboards for multi-client ad campaign performance across Google Ads, Meta Ads, and LinkedIn Ads. This site brings together my experience, projects, dashboards, education, and certifications in a single place for recruiters, clients, and collaborators to explore.

## Features

- **Project case studies** - in-depth writeups of real analytics projects (keyword & campaign analysis, CRM sales pipelines, retail transaction analysis), each with a downloadable PDF report
- **Certifications** - course credentials with details and direct view/download links to the certificate files
- **Resume download** - one-click access to an up-to-date resume
- **Contact form** - reach out directly from the site
- **Fully responsive** - works cleanly across desktop, tablet, and mobile
- **Dark-mode-ready design** built with a clean, modern visual style

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) - build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) - styling
- [Lucide](https://lucide.dev/) - icons

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Y0u-We/Portfolio-website.git
cd Portfolio-website
npm install
```

Run the local dev server:

```bash
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build       # production build → dist/
npm run preview     # preview the production build locally
npm run lint         # run ESLint
npm run typecheck    # run TypeScript checks
```

## Project Structure

```
src/
  components/   → page sections (Hero, About, Projects, Experience, Contact, etc.)
  data/         → editable content — profile info, projects, credentials
public/
  projects/     → project cover images and downloadable PDFs
  certifications/ → certificate images
  education/    → education certificate files
```

Most content (projects, certifications, experience, profile details) can be updated by editing the files in `src/data/` — no changes to components are needed for routine content updates.

## Contact

- **Email:** sunaryuvi2110@gmail.com
- **LinkedIn:** [linkedin.com/in/yuvraj-sunar](https://www.linkedin.com/in/yuvraj-sunar-5b5a162a5/)
- **GitHub:** [github.com/Y0u-We](https://github.com/Y0u-We)
