<div align="center">

# Aaroh Dharmadhikari

### Full Stack Developer · AI Powered Developer


[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?style=flat-square&logo=three.js)](https://threejs.org/)

**[Live Site](#)** — add your deployed URL here · **[Resume](#)** — add once `public/resume.pdf` exists

New here? → see [`ROADMAP.md`](./ROADMAP.md) for the exact steps to take after cloning this repo.

</div>

---

## 📁 What this repository is

This is the source for my personal portfolio — a from-scratch Next.js build, not a template. It exists to give someone evaluating me for a role a fast, honest, well-crafted look at what I actually build, including the two AI systems I'm currently developing. Every section is real content, driven from typed data files, not filler text.

## ⚠️ Caution

This repo is content-complete in code but **not content-complete in data** — several real-world values are intentionally left empty rather than faked, and the site will look and behave differently once they're filled in:

- **Contact section is inactive** until `email` is set in `src/data/profile.ts` — it shows a note instead of a button.
- **Resume button is hidden** until `public/resume.pdf` exists and `resumeUrl` is set.
- **Hero photo shows a monogram fallback** until `public/images/portrait.jpg` is added.
- **Project cards show no link icons** until `repoUrl` / `demoUrl` are filled in per project in `src/data/projects.ts`.
- **Achievements section does not exist** — there was no verified achievement content to put in it. Add one yourself if you have real content; don't invent placeholder entries.
- **Experience section reflects project build status, not employment history** — there is none in the source data. Restructure it if you have real work experience to add.
- **Metadata still points at a placeholder domain** (`aarohdharmadhikari.dev`) in `layout.tsx`, `sitemap.ts`, and `robots.ts`.

Do not deploy before working through the checklist in [`ROADMAP.md`](./ROADMAP.md) — pushing this live with those gaps unresolved means a recruiter hits dead buttons.

## 🛠 Tech & status

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router, React Server Components) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS, custom design tokens |
| Motion | Framer Motion |
| 3D | Three.js (dynamically imported, client-only, WebGL-guarded) |
| Icons | lucide-react |
| Fonts | Space Grotesk, Inter, JetBrains Mono (self-hosted via Fontsource — no Google Fonts network dependency) |

| Build status | State |
|---|---|
| Code / structure | ✅ Complete — `tsc`, `next lint`, `next build` all pass clean |
| Content | ⚠️ Partial — see **Caution** above |
| Deployment | ⏳ Not yet deployed |

## 🧩 Modules

Each is a self-contained file under `src/components/`, composed together in `src/app/page.tsx` and `layout.tsx`.

**Persistent chrome** (`src/components/`)
| Module | What it does |
|---|---|
| `background.tsx` | Fixed ambient grid + drifting gradient blobs |
| `interactive-field.tsx` | Mouse-reactive particle constellation, full-page |
| `navigation.tsx` | Top nav, scroll-solidify, mobile menu, resume button |
| `status-readout.tsx` | Live-clock HUD, real time, not a static graphic |
| `footer.tsx` | Bottom nav + copyright |

**Page sections** (`src/components/sections/`), in scroll order
| Module | What it does |
|---|---|
| `hero.tsx` | Name, title, masked portrait, 3D scene background |
| `projects.tsx` | Featured + compact project cards, repo/demo links |
| `skills.tsx` | Skill category cards |
| `about.tsx` | Bio + fact panel |
| `experience.tsx` | Project-based build timeline |
| `education.tsx` | Degree card |
| `tech-stack.tsx` | Scrolling tech marquees |
| `dev-setup.tsx` | Verified hardware specs |
| `contact.tsx` | Email CTA + socials, conditional on data |

**Data layer** (`src/data/`) — the only place content should be edited
| File | Owns |
|---|---|
| `profile.ts` | Identity, education, email, socials, resume link |
| `projects.ts` | Projects, repo/demo links |
| `skills.ts` | Skill groups |
| `tech-stack.ts` | Marquee content |
| `dev-setup.ts` | Hardware specs |

## 🚀 Instructions

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

Deploy: push to GitHub, import the repo in [Vercel](https://vercel.com) — no environment variables required.

For the full sequence — what to do first, in what order, and how to verify each step — see [`ROADMAP.md`](./ROADMAP.md).

---

<div align="center">

Built from scratch with Next.js, TypeScript, and Tailwind CSS.

</div>
