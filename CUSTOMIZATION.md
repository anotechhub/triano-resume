# Customization Guide

This guide will help you customize the resume website for your own use.

## Quick Start Customization Checklist

### 1. Personal Information

#### Hero Section ([src/components/sections/hero.tsx](src/components/sections/hero.tsx))

Update the following:
- Name (line 28-33)
- Role/Title (line 38-42)
- Pitch/Tagline (line 48-52)
- Contact information in `contactInfo` array (lines 12-23)

```typescript
// Update these values
const contactInfo = [
  { icon: Phone, label: "YOUR_PHONE", href: "https://wa.me/YOUR_PHONE" },
  { icon: Mail, label: "YOUR_EMAIL", href: "mailto:YOUR_EMAIL" },
  { icon: Linkedin, label: "LinkedIn", href: "YOUR_LINKEDIN_URL" },
  { icon: Github, label: "GitHub", href: "YOUR_GITHUB_URL" },
];
```

### 2. About Section ([src/components/sections/about.tsx](src/components/sections/about.tsx))

Replace the bio paragraphs (lines 20-38) with your own professional summary.

### 3. Experience ([src/components/sections/experience.tsx](src/components/sections/experience.tsx))

Update the `experiences` array (lines 9-58) with your work history:
```typescript
{
  company: "Company Name",
  title: "Your Title",
  period: "Start Date – End Date",
  responsibilities: [
    "Achievement 1",
    "Achievement 2",
  ],
  technologies: ["Tech1", "Tech2"],
}
```

### 4. Projects ([src/components/sections/projects.tsx](src/components/sections/projects.tsx))

Update the `projects` array (lines 11-147) with your portfolio projects:
```typescript
{
  title: "Project Title",
  client: "Client/Company",
  period: "2024",
  description: "Brief description",
  impacts: [
    "Key impact 1",
    "Key impact 2",
  ],
  technologies: ["Tech1", "Tech2"],
  tags: ["Category1", "Category2"],
}
```

### 5. Tech Stack ([src/components/sections/tech-stack.tsx](src/components/sections/tech-stack.tsx))

Update the `techStack` array (lines 13-43) with your skills by category.

### 6. Education ([src/components/sections/education.tsx](src/components/sections/education.tsx))

Update:
- `education` object (lines 11-21) with your degree information
- `certifications` array (lines 23-45) with your certifications

### 7. Contact Form ([src/components/sections/contact.tsx](src/components/sections/contact.tsx))

Update:
- Email addresses (lines 73-75, 245-246)
- Social links in `socialLinks` array (lines 26-40)
- Phone number (lines 253-256)

### 8. SEO & Metadata ([src/app/layout.tsx](src/app/layout.tsx))

Update metadata (lines 8-43):
- Title
- Description
- Keywords
- OG tags
- JSON-LD schema with your information

Change these values:
- `url: "https://YOUR_DOMAIN.com"`
- `name: "Your Name"`
- Social media URLs in `sameAs` array

### 9. CV PDF

Replace the placeholder with your actual CV:
```bash
cp /path/to/your/cv.pdf public/Triano_Nurhikmat_CV.pdf
```

Or rename your CV to match the expected filename.

## Color Customization

### Tailwind Config ([tailwind.config.ts](tailwind.config.ts))

Update the color palette (lines 12-15):
```typescript
colors: {
  cream: "#f8f5ed",  // Background
  mint: "#93dece",   // Accents, tags
  teal: "#38777b",   // Buttons, headings
  navy: "#0c1e29",   // Text
}
```

## Typography

### Font ([src/app/layout.tsx](src/app/layout.tsx))

Change the font (line 4):
```typescript
import { YourFont } from "next/font/google";
const yourFont = YourFont({ subsets: ["latin"] });
```

Update the body className (line 85):
```typescript
<body className={yourFont.className}>{children}</body>
```

## Domain Configuration

When deploying to your own domain:

1. Update the `baseUrl` in:
   - [src/app/sitemap.ts](src/app/sitemap.ts) (line 4)
   - [src/app/robots.ts](src/app/robots.ts) (line 4)

2. Update metadata URLs in [src/app/layout.tsx](src/app/layout.tsx)

## Advanced Customization

### Adding New Sections

1. Create a new file in `src/components/sections/`
2. Follow the pattern of existing sections
3. Import and add to [src/app/page.tsx](src/app/page.tsx)

### Contact Form Backend

The current setup uses `mailto:`. To integrate with a backend:

1. **Option 1: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update the `onSubmit` function in `contact.tsx`

2. **Option 2: API Route**
   - Create `src/app/api/contact/route.ts`
   - Implement POST handler
   - Update form submission in `contact.tsx`

3. **Option 3: Email Service (SendGrid, etc.)**
   - Set up environment variables
   - Create API route
   - Integrate with the service

### Adding Images

1. Place images in `/public`
2. Use Next.js Image component:
```typescript
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### Animation Customization

Animations are in each section component using Framer Motion. Adjust:
- `initial` - starting state
- `whileInView` - animated state
- `transition` - animation timing

Example:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

## Testing Your Changes

After customization:

1. Run development server:
```bash
npm run dev
```

2. Test build:
```bash
npm run build
npm run start
```

3. Run tests:
```bash
npm run test
```

4. Check linting:
```bash
npm run lint
```

## Deployment Checklist

Before deploying:

- [ ] Updated all personal information
- [ ] Replaced placeholder CV with actual PDF
- [ ] Updated SEO metadata
- [ ] Updated social media links
- [ ] Changed domain URLs in sitemap/robots
- [ ] Tested responsive design (360px - 1440px+)
- [ ] Tested all interactive elements
- [ ] Verified form validation works
- [ ] Checked accessibility (keyboard navigation)
- [ ] Tested on multiple browsers
- [ ] Build completes without errors
- [ ] All tests pass

## Need Help?

- Check the main [README.md](README.md) for setup instructions
- Review Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS docs: https://tailwindcss.com/docs
- Review Framer Motion docs: https://www.framer.com/motion/

## Tips

1. **Start small**: Update one section at a time and test
2. **Keep backups**: Commit your changes to git regularly
3. **Test often**: Run the dev server frequently while making changes
4. **Use TypeScript**: Let TypeScript help you catch errors early
5. **Mobile first**: Always test on mobile sizes first
