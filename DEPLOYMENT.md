# Deployment Guide

This guide covers deploying your resume website to Vercel (recommended) and alternative platforms.

## Deploying to Vercel (Recommended)

Vercel is the creators of Next.js and provides the best deployment experience.

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

   This creates a preview deployment. Follow the prompts:
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name: (default or custom)
   - Directory: ./
   - Override settings? No

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Method 2: GitHub Integration (Recommended for CI/CD)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Next.js (auto-detected)
     - Build Command: `npm run build` (default)
     - Output Directory: `.next` (default)
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` deploys to production
   - PRs create preview deployments
   - Custom domains can be added in project settings

### Method 3: Vercel Dashboard (Manual Upload)

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [vercel.com](https://vercel.com)

3. Drag and drop the `.next` folder

Note: This method doesn't support automatic deployments.

## Custom Domain Setup (Vercel)

1. Go to your project in Vercel Dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Configure DNS:
   - **A Record**: Point to Vercel's IP (76.76.21.21)
   - **CNAME**: Point to your vercel deployment URL

5. Update URLs in your code:
   - `src/app/sitemap.ts` (line 4)
   - `src/app/robots.ts` (line 4)
   - `src/app/layout.tsx` (metadata)

## Environment Variables (If Needed)

If you add environment variables later (e.g., for contact form backend):

1. **Local Development**
   Create `.env.local`:
   ```bash
   NEXT_PUBLIC_FORM_ENDPOINT=your_endpoint
   ```

2. **Vercel Dashboard**
   - Go to Settings → Environment Variables
   - Add variables for Production, Preview, Development
   - Redeploy for changes to take effect

3. **Vercel CLI**
   ```bash
   vercel env add NEXT_PUBLIC_FORM_ENDPOINT
   ```

## Alternative Deployment Platforms

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **netlify.toml** (create in root)
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

3. Deploy via Netlify CLI or Git integration

### AWS Amplify

1. Connect your Git repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### Cloudflare Pages

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Enable Next.js compatibility
4. Deploy

### Self-Hosting (Docker)

1. **Create Dockerfile**
   ```dockerfile
   FROM node:20-alpine AS base

   # Install dependencies
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   # Build
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Production
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV=production

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

   USER nextjs
   EXPOSE 3000
   ENV PORT=3000

   CMD ["node", "server.js"]
   ```

2. **Update next.config.ts**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'standalone',
     // ... rest of config
   };
   ```

3. **Build and Run**
   ```bash
   docker build -t resume-website .
   docker run -p 3000:3000 resume-website
   ```

## Pre-Deployment Checklist

Before deploying to production:

### Content
- [ ] All personal information updated
- [ ] CV PDF uploaded to `/public`
- [ ] All placeholder text replaced
- [ ] Social media links verified
- [ ] Email addresses correct

### SEO & Metadata
- [ ] Updated site title and description
- [ ] OpenGraph tags configured
- [ ] Twitter card metadata set
- [ ] JSON-LD schema updated
- [ ] Sitemap URLs updated
- [ ] Robots.txt configured

### Technical
- [ ] Build completes without errors: `npm run build`
- [ ] Tests pass: `npm run test`
- [ ] No linting errors: `npm run lint`
- [ ] All images optimized
- [ ] Environment variables set (if needed)

### Testing
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] Tested responsive breakpoints (360px-1440px+)
- [ ] Contact form validation works
- [ ] All links open correctly
- [ ] CV download works
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible

### Performance
- [ ] Lighthouse score ≥ 95
- [ ] Images properly sized
- [ ] No console errors
- [ ] Fast page load times

## Post-Deployment

### 1. Verify Deployment

- Visit your production URL
- Test all interactive elements
- Verify forms work
- Check mobile responsiveness
- Test all external links

### 2. Monitor Performance

Use these tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- Vercel Analytics (built-in)

### 3. Set Up Analytics (Optional)

**Google Analytics**
1. Get tracking ID from Google Analytics
2. Add to `src/app/layout.tsx`:
   ```typescript
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
     strategy="afterInteractive"
   />
   ```

**Vercel Analytics**
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 4. SEO Submission

Submit your sitemap to:
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

Your sitemap URL: `https://yourdomain.com/sitemap.xml`

## Continuous Deployment

With GitHub integration, your workflow becomes:

1. Make changes locally
2. Test: `npm run dev`
3. Commit: `git commit -am "Update description"`
4. Push: `git push origin main`
5. Vercel automatically deploys

### Preview Deployments

For testing before production:

1. Create a new branch:
   ```bash
   git checkout -b feature/new-section
   ```

2. Make changes and push:
   ```bash
   git push origin feature/new-section
   ```

3. Create Pull Request on GitHub
4. Vercel creates preview deployment
5. Test preview URL
6. Merge PR to deploy to production

## Troubleshooting

### Build Fails

1. **Check build locally**
   ```bash
   npm run build
   ```

2. **Common issues**
   - TypeScript errors: Check types
   - Missing dependencies: Run `npm install`
   - Environment variables: Set in Vercel dashboard

### Deployment Succeeds but Site Doesn't Work

1. Check browser console for errors
2. Verify all environment variables are set
3. Check Vercel function logs
4. Ensure `next.config.ts` is correct

### Slow Performance

1. Optimize images
2. Check bundle size: `npm run build` shows sizes
3. Use dynamic imports for heavy components
4. Enable caching headers

### Contact Form Not Working

1. Check email service configuration
2. Verify API routes (if using)
3. Check environment variables
4. Test with mailto fallback

## Getting Help

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Discord**: [vercel.com/discord](https://vercel.com/discord)

## Cost Considerations

### Vercel Free Tier
- 100 GB bandwidth/month
- Unlimited deployments
- Automatic HTTPS
- Perfect for personal portfolios

### Paid Tiers
Only needed if you exceed free tier limits or need:
- Team collaboration
- Advanced analytics
- Higher bandwidth
- Faster builds

## Maintenance

### Regular Updates

1. Keep dependencies updated:
   ```bash
   npm outdated
   npm update
   ```

2. Update Next.js:
   ```bash
   npm install next@latest react@latest react-dom@latest
   ```

3. Test after updates:
   ```bash
   npm run build
   npm run test
   ```

### Content Updates

1. Update relevant section files
2. Test locally
3. Commit and push
4. Automatic deployment

---

**You're ready to deploy!** Follow the Vercel GitHub integration method for the best experience.
