# Adaline Landing Page

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Asset Replacement

Replace these placeholder paths with your actual assets:

- Demo video: `/components/DemoSection.tsx` - Replace video placeholder with actual video file
- Background images: Add to `/public/assets/` directory
- Company logos: Replace placeholder divs in `/components/Hero.tsx` credibility section

## File Structure

```
/app
  layout.tsx          # Root layout
  page.tsx           # Main page
  globals.css        # Global styles
/components
  Navbar.tsx         # Navigation header
  Hero.tsx           # Hero section
  CredibilityStrip.tsx # Stats and features
  DemoSection.tsx    # Video demo section
```

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px
