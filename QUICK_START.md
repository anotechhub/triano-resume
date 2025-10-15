# Quick Start Guide

Get your resume website up and running in 5 minutes!

## Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## Installation

```bash
# 1. Navigate to the project directory
cd Resume

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site!

## Essential Customizations

### Step 1: Update Personal Info (2 minutes)

Edit [src/components/sections/hero.tsx](src/components/sections/hero.tsx):

```typescript
// Lines 12-23: Update contact information
const contactInfo = [
  { icon: Phone, label: "+YOUR_PHONE", href: "https://wa.me/YOUR_PHONE" },
  { icon: Mail, label: "your.email@example.com", href: "mailto:your.email@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "YOUR_LINKEDIN_URL" },
  { icon: Github, label: "GitHub", href: "YOUR_GITHUB_URL" },
];

// Lines 28-52: Update name, role, and pitch
<h1>Your Name</h1>
<p>Your Role/Title</p>
<p>Your pitch/tagline</p>
```

### Step 2: Add Your CV (30 seconds)

```bash
# Copy your CV to the public folder
cp /path/to/your/cv.pdf public/Triano_Nurhikmat_CV.pdf
```

### Step 3: Update SEO (1 minute)

Edit [src/app/layout.tsx](src/app/layout.tsx) lines 8-43:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ... update other fields
};
```

### Step 4: Deploy (1 minute)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or deploy to production
vercel --prod
```

Done! Your site is live.

## What You Get

### 7 Sections
1. **Hero** - Name, role, CTAs, contact info
2. **About** - Professional summary
3. **Experience** - Timeline of work history
4. **Projects** - Filterable portfolio with case studies
5. **Tech Stack** - Skills by category with copy-to-clipboard
6. **Education** - Degrees and certifications
7. **Contact** - Form with validation + social links

### Features
- Fully responsive (360px-1440px+)
- Smooth animations with Framer Motion
- Accessibility compliant (WCAG AA)
- SEO optimized (Lighthouse ≥ 95)
- Dark/light mode support
- Copy-to-clipboard for tech stack
- Contact form with spam protection

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- react-hook-form + Zod validation
- Vitest for testing

## Next Steps

### For Quick Tweaks
- Read [CUSTOMIZATION.md](CUSTOMIZATION.md) for section-by-section guides

### For Deep Customization
- Check [README.md](README.md) for full documentation
- Explore `src/components/sections/` to modify content
- Edit `tailwind.config.ts` to change colors

### For Deployment
- Read [DEPLOYMENT.md](DEPLOYMENT.md) for platform-specific guides
- Configure custom domain
- Set up analytics

## File Structure

```
Resume/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout + SEO
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── sitemap.ts         # Dynamic sitemap
│   │   └── robots.ts          # Robots.txt config
│   ├── components/
│   │   ├── sections/          # Page sections
│   │   │   ├── hero.tsx       # ⚠️ UPDATE THIS
│   │   │   ├── about.tsx      # ⚠️ UPDATE THIS
│   │   │   ├── experience.tsx # ⚠️ UPDATE THIS
│   │   │   ├── projects.tsx   # ⚠️ UPDATE THIS
│   │   │   ├── tech-stack.tsx # ⚠️ UPDATE THIS
│   │   │   ├── education.tsx  # ⚠️ UPDATE THIS
│   │   │   └── contact.tsx    # ⚠️ UPDATE THIS
│   │   └── ui/               # Reusable components
│   ├── lib/                  # Utilities
│   └── __tests__/            # Tests
├── public/
│   └── Triano_Nurhikmat_CV.pdf  # ⚠️ ADD YOUR CV HERE
├── README.md                 # Full documentation
├── CUSTOMIZATION.md          # Detailed customization guide
├── DEPLOYMENT.md             # Deployment instructions
└── package.json              # Dependencies

⚠️ = Files you should update
```

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linter
npm run test     # Run tests
```

## Tips for Success

1. **Start Simple**: Update personal info first, then iterate
2. **Test Early**: Run `npm run build` to catch errors
3. **Commit Often**: Use git to track changes
4. **Mobile First**: Always check mobile view
5. **Ask for Help**: Check docs or create an issue

## Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Build fails
```bash
# Check for errors
npm run build

# Common fixes:
# - Fix TypeScript errors
# - Update imports
# - Check for missing files
```

### Styles not applying
```bash
# Restart dev server
# Press Ctrl+C, then:
npm run dev
```

## Need More Help?

- **Full Documentation**: [README.md](README.md)
- **Customization Guide**: [CUSTOMIZATION.md](CUSTOMIZATION.md)
- **Deployment Guide**: [DEPLOYMENT.md](DEPLOYMENT.md)
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs

## Support

Found a bug or need help?
- Check existing documentation
- Review Next.js and React documentation
- Search for similar issues online

---

**Ready to launch your career?** Update your info and deploy! 🚀
