# Joshua Melendres — Portfolio

A personal portfolio website built with **Next.js 14** and **Tailwind CSS**, inspired by [craftzdog's homepage](https://github.com/craftzdog/craftzdog-homepage).

## ✨ Features

- Dark / Light mode toggle (next-themes)
- Smooth page animations (framer-motion)
- Fully responsive design
- Clean terminal-inspired aesthetic
- Pages: Home, Works, Skills

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
joshua-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home / About page
│   ├── globals.css         # Global styles
│   ├── works/
│   │   └── page.tsx        # Works / Projects page
│   ├── skills/
│   │   └── page.tsx        # Skills page
│   └── not-found.tsx       # 404 page
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── AnimatedSection.tsx
├── public/
│   └── images/             # Add your profile photo here
├── tailwind.config.ts
└── next.config.js
```

## 🖼️ Adding Your Profile Photo

1. Add your photo to `public/images/joshua.jpg`
2. In `app/page.tsx`, find the avatar section and replace:

```tsx
<div className="... flex items-center justify-center text-4xl font-display font-bold text-accent animate-float">
  J
</div>
```

With:

```tsx
import Image from 'next/image'
<Image src="/images/joshua.jpg" alt="Joshua" width={112} height={112} className="rounded-2xl object-cover w-full h-full" />
```

## 🌐 Deploy to Vercel

The easiest way to deploy is via [Vercel](https://vercel.com):

1. Push this project to GitHub
2. Import the repo on vercel.com
3. Click Deploy

## 🎨 Customization

- **Colors** — Edit `tailwind.config.ts` → `colors.accent`
- **Fonts** — Swap Google Fonts import in `app/globals.css`
- **Projects** — Edit the `projects` array in `app/works/page.tsx`
- **Skills** — Edit `skillCategories` in `app/skills/page.tsx`
- **Timeline** — Edit `timeline` array in `app/page.tsx`
