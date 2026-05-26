# Ahmed Hasan — Consulting Website

Premium personal consulting website for Ahmed Hasan, Senior Supply Chain, Operations, Procurement & Compliance Consultant based in Erbil, Iraq.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · next/font · next/image

---

## 🚀 Quick Start (Local)

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📦 Deploy to Vercel (Recommended)

### Option A — GitHub + Vercel (easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ahmed-hasan-consulting.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) → **New Project**
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Click **Deploy** — done ✅

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel
# Follow the prompts — it auto-detects Next.js
```

---

## 🗂 Project Structure

```
ahmed-hasan-consulting/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   └── globals.css       # Base styles, animations, custom CSS
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-screen hero with animated stats
│   ├── TickerCounters.tsx # Scrolling ticker + counter strip
│   ├── ClientsPartners.tsx # Clients & KeenTech partner section
│   ├── About.tsx         # About with portrait and strengths
│   ├── QuoteStrip.tsx    # Full-width image quote band
│   ├── Services.tsx      # 6 service cards with images
│   ├── Industries.tsx    # 6 industry cards with images
│   ├── Certifications.tsx # Credentials grid
│   ├── Resources.tsx     # Downloadable resources
│   ├── ContactBand.tsx   # CTA image band
│   ├── Contact.tsx       # Contact form + info
│   ├── Footer.tsx        # 4-column footer
│   └── ScrollReveal.tsx  # Intersection observer animations
├── public/               # Static assets (add favicon here)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Name, tagline, meta | `app/layout.tsx` |
| Hero text & stats | `components/Hero.tsx` |
| Client names | `components/ClientsPartners.tsx` |
| Services list | `components/Services.tsx` |
| Email / phone | `components/Contact.tsx` & `components/Footer.tsx` |
| LinkedIn URL | `components/Contact.tsx` & `components/Footer.tsx` |
| Colors | `tailwind.config.js` + `app/globals.css` |
| Profile photo | Replace Unsplash URL in `components/About.tsx` with your own image in `/public` |

### To use a local profile photo:
1. Add your photo to `/public/profile.jpg`
2. In `components/About.tsx`, change the `src` to `"/profile.jpg"`

---

## 🌐 Custom Domain on Vercel

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `ahmedhasan.com` (or preferred domain)
3. Update DNS at your registrar:
   - **A record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

---

## 📋 Build & Export

```bash
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # Lint check
```
