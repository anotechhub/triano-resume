# Triano Nurhikmat (Anno) - Personal Resume Website

A production-ready, modern personal resume website for an AI/Data Engineer, built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion. Optimized for headhunters and recruiters with a focus on performance, accessibility, and SEO.

> **Quick Links**: [Quick Start](QUICK_START.md) | [Customization Guide](CUSTOMIZATION.md) | [Deployment Guide](DEPLOYMENT.md) | [Documentation Index](DOCS_INDEX.md)

## Features

- **Modern Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive from 360px to 1440px+ screens
- **Custom Design System**:
  - Cream (#f8f5ed) background
  - Mint (#93dece) accents and tags
  - Teal (#38777b) buttons and headings
  - Deep Navy (#0c1e29) text
  - Rounded-2xl cards with soft shadows
- **Smooth Animations**: Framer Motion with reduced-motion support
- **Accessibility**: WCAG compliant with semantic HTML, ARIA labels, and keyboard navigation
- **SEO Optimized**:
  - Next.js metadata API
  - JSON-LD structured data
  - OpenGraph and Twitter cards
  - Sitemap and robots.txt
- **Performance**: Optimized for Lighthouse scores ≥ 95
- **Interactive Sections**:
  - Hero with CTAs and contact chips
  - About section
  - Timeline-based experience display
  - Filterable project showcase
  - Tech stack with copy-to-clipboard badges
  - Education and certifications
  - Contact form with validation (react-hook-form + Zod)

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Resume
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Add your CV PDF

Place your CV PDF file in the `/public` directory with the name `Triano_Nurhikmat_CV.pdf`:

```bash
cp /path/to/your/cv.pdf public/Triano_Nurhikmat_CV.pdf
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 5. Customize content

Edit the following files to customize your content:

- `src/components/sections/hero.tsx` - Update name, role, pitch, and contact info
- `src/components/sections/about.tsx` - Update bio and summary
- `src/components/sections/experience.tsx` - Update work experience
- `src/components/sections/projects.tsx` - Update project portfolio
- `src/components/sections/tech-stack.tsx` - Update technology skills
- `src/components/sections/education.tsx` - Update education and certifications
- `src/app/layout.tsx` - Update SEO metadata and JSON-LD schema

## Project Structure

```
Resume/
├── public/                          # Static files
│   ├── Triano_Nurhikmat_CV.pdf     # CV PDF (add this file)
│   └── .gitkeep
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx              # Root layout with SEO
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles
│   │   ├── sitemap.ts              # Dynamic sitemap
│   │   └── robots.ts               # Robots.txt config
│   ├── components/
│   │   ├── sections/               # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── tech-stack.tsx
│   │   │   ├── education.tsx
│   │   │   └── contact.tsx
│   │   └── ui/                     # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── badge.tsx
│   │       ├── tag.tsx
│   │       ├── section.tsx
│   │       ├── container.tsx
│   │       ├── timeline.tsx
│   │       └── project-card.tsx
│   ├── lib/
│   │   └── utils.ts                # Utility functions
│   └── __tests__/                  # Unit tests
│       ├── setup.ts
│       └── utils.test.ts
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
├── postcss.config.mjs              # PostCSS configuration
├── vitest.config.ts                # Vitest configuration
└── package.json                    # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests with Vitest

## Testing

Run the test suite:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test -- --ui
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your repository
5. Configure the project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

### Option 3: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub account to Vercel
3. Import the repository
4. Vercel will automatically deploy on every push to the main branch

## Environment Variables

No environment variables are required for the basic setup. If you integrate with a contact form service (like Formspree, SendGrid, etc.), add them to `.env.local`:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint
```

## Customization

### Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  cream: "#f8f5ed",
  mint: "#93dece",
  teal: "#38777b",
  navy: "#0c1e29",
}
```

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

### Content

All content is located in the `src/components/sections/` directory. Simply edit the TypeScript files to update your information.

## Performance Optimization

- Server Components by default
- Client Components only where interactivity is needed
- Image optimization with Next.js Image component (ready to add)
- Automatic code splitting
- CSS optimization with Tailwind's purge

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support
- High contrast colors (WCAG AA compliant)

## SEO Features

- Metadata API with OpenGraph and Twitter cards
- JSON-LD structured data (Person schema)
- Dynamic sitemap.xml
- Robots.txt
- Semantic HTML structure
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

Triano Nurhikmat (Anno)
- Email: anno.tri@gmail.com
- LinkedIn: [linkedin.com/in/trianonurhikmat](https://www.linkedin.com/in/trianonurhikmat/)
- GitHub: [github.com/trianonurhikmat](https://github.com/trianonurhikmat)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide React](https://lucide.dev/)
