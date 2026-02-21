# 🌅 Sunrise Detailing - Next.js Application

A scalable, high-performance web application tailored for a premium mobile auto detailing business, built using **Next.js 14**, **React**, and **Tailwind CSS**.

---

## 🚀 Tech Stack Highlights

- **Framework**: [Next.js (App Router)](https://nextjs.org/) for fast server-side rendering, powerful routing, and SEO optimization.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for rapid UI development and seamless mobile responsive design.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid, dynamic page transitions and premium scroll interactions.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, uniform, and minimal vector iconography.
- **Components**: Carefully crafted custom UI components (GlassCards, Buttons, Inputs, Selects) enforcing a strict design system.

---

## 📂 Project Architecture & Folder Layout

The codebase strictly follows the Next.js `App Router` architecture to separate routing concerns cleanly from atomic UI components.

```text
/
├── public/                # Static global assets (Images, Global Logo, Videos)
├── src/
│   ├── app/               # The Next.js App Router (Page routes + Layouts)
│   │   ├── about/         # -> /about page route
│   │   ├── areas/         # -> /areas page route
│   │   ├── book/          # -> /book page route (Multi-step booking form)
│   │   ├── contact/       # -> /contact page route
│   │   ├── services/      # -> /services page route 
│   │   ├── globals.css    # Global Tailwind directives & native CSS overrides
│   │   ├── layout.tsx     # The Root application layout wrapping the entire app
│   │   ├── page.tsx       # -> / (The Homepage)
│   │   └── icon.svg       # Dynamically configured SVG Favicon for modern browsers
│   │
│   └── components/        # Reusable standard React code chunks
│       ├── ui/            # Granular, low-level components (Buttons, Inputs, PageTransitions)
│       └── [Various].tsx  # Larger structural components (Navbar, Footer, Hero, ServiceAreas)
```

---

## 💻 Getting Started (Local Development)

To spin up this project on your local machine, ensure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate your browser to [http://localhost:3000](http://localhost:3000) to view the application in real-time. Changes to code will automatically trigger Hot-Module Replacement (HMR).

---

## 🎨 Theme & UI Style Guide

This project originally utilized a dark theme, but was completely **reverted and polished into a Light, User-Friendly Premium Theme** upon client request to drastically improve readability and mobile elegance across devices.

**Brand Colors (Configured in `/tailwind.config.js`):**
- **Navies**: `#0A111A` (Deepest Navy for headers) / `#0B2B5B` (Sunrise Navy)
- **Oranges**: `#FF5E00` (Core Sunrise Orange) / `#FF8A00` (Sunset Orange gradient)
- **Yellows**: `#FFB800` (Sunrise Yellow gradient)
- **Slates**: `#F8F9FA` (Primary background off-white slate)

*When adding new components, please utilize these defined Tailwind utility variables (e.g., `text-sunrise-orange`, `bg-sunrise-slate`) rather than arbitrary hex values to persist brand uniformity.*

---

## 📱 Mobile Responsiveness Guide
We have explicitly optimized the application interface for **"Touch-First" Mobile Layouts**. 
When maintaining this code, ensure strict compliance with responsive Tailwind prefixes.
- **Headers & Padding**: Scale down paddings using mobile-first strategies. (e.g., use `p-6 md:p-12` instead of hardcoding `p-12`).
- **Hero Typography**: Large `text-7xl` display sizes should safely scale back using `text-4xl md:text-7xl` to prevent unreadable line wrapping on iPhones.
- **Flex Layouts**: Use `flex-col md:flex-row` for stacked layout transitions, preventing items from bursting out of bounds.

---

## 🛠 Script Commands Reference
- `npm run dev`: Boots the Next.js local development workspace.
- `npm run build`: Compiles the application into a production-ready optimized folder.
- `npm run start`: Spins up the production build locally (Must run `build` first).
- `npm run lint`: Scans the codebase for strict Next.js/React standard violations.

---

*Designed & Developed by [Make It Viral Media](https://makeitviralmedia.com)*
