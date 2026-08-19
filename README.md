<div align="center">

# Aaroh Dharmadhikari

### Full Stack Developer · AI Powered Developer

B.Tech, Artificial Intelligence & Data Science — Vishwakarma University

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-r185-black?style=flat-square&logo=three.js)](https://threejs.org/)

**[Live Portfolio](https://portfolio-xi-ivory-f5wgx7e77w.vercel.app/)**

</div>

---

## 📁 Portfolio

This repository contains the source code for my personal portfolio website.

The portfolio is a from-scratch Next.js application designed to present my projects, technical skills, experience, education, development interests, and professional work through a modern interactive interface.

The project combines a structured portfolio architecture with responsive layouts, custom UI components, motion, interactive visual elements, and a dark technology-focused design language.

---

## 🎯 Project Focus

The portfolio is built around four primary areas:

- **Full Stack Development**
- **Artificial Intelligence & Machine Learning**
- **Software Engineering**
- **Interactive Web Experiences**

The website brings these areas together through a single digital experience rather than presenting them as separate technical categories.

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 — App Router |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Motion | Framer Motion |
| 3D / Visuals | Three.js |
| Icons | Lucide React |
| Smooth Scrolling | Lenis |
| Viewport Interaction | React Intersection Observer |
| Utility Styling | clsx, tailwind-merge |
| Fonts | Space Grotesk, Inter, JetBrains Mono |

---

## 🧩 Portfolio Architecture

The portfolio is structured around reusable components and dedicated sections.

### Persistent Interface

| Component | Purpose |
|---|---|
| `background.tsx` | Ambient background system and visual atmosphere |
| `interactive-field.tsx` | Mouse-reactive interactive field |
| `navigation.tsx` | Primary navigation and responsive menu |
| `status-readout.tsx` | Dynamic interface status and time display |
| `footer.tsx` | Footer navigation and portfolio information |

### Portfolio Sections

| Component | Purpose |
|---|---|
| `hero.tsx` | Primary introduction, identity, and hero experience |
| `projects.tsx` | Featured and additional project presentation |
| `skills.tsx` | Technical skills organized by category |
| `about.tsx` | Personal background and supporting information |
| `experience.tsx` | Development and project experience timeline |
| `education.tsx` | Academic background |
| `tech-stack.tsx` | Technology showcase |
| `dev-setup.tsx` | Development hardware and setup |
| `contact.tsx` | Contact and social presence |

---

## 🗂 Data Architecture

Portfolio content is separated from the presentation layer through structured data files.

```text
src/
└── data/
    ├── profile.ts
    ├── projects.ts
    ├── skills.ts
    ├── tech-stack.ts
    └── dev-setup.ts
