# Amarnath Sujith — Product Designer & UI/UX Specialist Portfolio

A modern, high-performance personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide Icons**. Designed with warm luxury aesthetics (#FBF9F5 cream background, #1A1A1A deep charcoal, and #FFB800 amber accents).

---

## ✨ Features

- **Hero Showcase**: Tagline badge, high-contrast typography, social links, rating & social proof indicators, and primary action CTAs.
- **Interactive Services Accordion**: Deep dive into UI/UX Design, Website Design, Mobile App Design, Wireframing & Prototyping, and Design Systems with direct project scoping triggers.
- **Curated Projects Showcase**: Filterable portfolio cards with tag filters, live metrics, tech badges, and modal detail views.
- **About Me & Philosophy**: Interactive milestones, design core principles, and skills grid.
- **Design Insights & Articles**: Curated blogs with reading times and topic tags.
- **Client Testimonials**: Verified ratings, client testimonials, and industry badges.
- **Interactive Contact Hub**: Pre-selected inquiry routing, interactive message form, email, and social direct links.
- **Fully Responsive & Accessible**: Mobile navigation drawer, smooth scrolling, keyboard accessibility, and SEO OpenGraph/JSON-LD metadata.

---

## 🛠 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler & Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Animations**: CSS transitions + Motion

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Production assets are generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📦 How to Push this Repository to GitHub

If you haven't initialized git yet:

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Amarnath Sujith portfolio"

# 4. Rename main branch
git branch -M main

# 5. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 Free Hosting Options

### Option 1: GitHub Pages (Automated with GitHub Actions)
This repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml`:
1. Push your code to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and publish your site at `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`.

### Option 2: Vercel (Recommended for instant deploy)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New Project** and select this repository.
3. Keep default settings (Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`).
4. Click **Deploy**. Your portfolio will be live with an SSL certificate in under 1 minute!

### Option 3: Netlify
1. Go to [netlify.com](https://netlify.com) and click **Add new site** > **Import an existing project**.
2. Connect your GitHub repository.
3. Build command: `npm run build`, Publish directory: `dist`.
4. Click **Deploy site**.

---

## 🎨 Customizing Content

- **Personal Info & Projects**: Edit data files in `src/data/` or component props in `src/components/`.
- **Contact Details**: Update email and social links in `src/components/ContactSection.tsx` and `src/components/Footer.tsx`.
- **Colors & Typography**: Configured in `src/index.css` and `index.html`.

---

## 📄 License
This project is open-source and free to use for personal portfolios.
