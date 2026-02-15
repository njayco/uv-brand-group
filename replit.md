# Unrevealed Brand Website

## Overview
A high-end marketing and portfolio website for **Unrevealed Brand**, a subsidiary of UV Music Group. The site positions Unrevealed Brand as the Product Development Arm and Revenue Infrastructure Studio of UV Music Group, showcasing the 100 Apps Project.

## Architecture
- **Frontend**: React SPA with Vite, Tailwind CSS, Framer Motion, Shadcn UI, wouter routing
- **Backend**: Express.js with in-memory storage for form submissions
- **Design System**: DMV Creative License-inspired aesthetic with cream paper textures, navy typography, guilloche patterns, and certificate borders

## Pages
- `/` - Home (Hero, Creative License card, Mission, Revenue Infrastructure, Support, Pricing)
- `/100-apps` - The 100 Apps Project portfolio with internal and commercial app tiles
- `/apply` - Apply for a Project form (DMV-style)
- `/structure` - Company Structure hierarchy diagram
- `/contact` - Contact form and social links
- `/donate`, `/gift`, `/fund` - Placeholder pages for future payment integration

## Key Components
- `SplashScreen` - Animated entry with UV Brand logo and 0-100% loading bar
- `SectionFrame` - Certificate-bordered section wrapper with guilloche background
- `Navigation` - Sticky top nav with mobile responsive menu
- `Footer` - Full footer with social links and nav

## Design Tokens
- **Fonts**: Playfair Display (display/headings), Inter (body), Space Mono (mono), Libre Baskerville (serif body)
- **Colors**: Cream/tan background, navy primary, muted red destructive accent
- **Custom CSS**: guilloche-bg, certificate-border, section-divider, uv-line-divider classes

## Recent Changes
- 2026-02-15: Initial build of full website with splash screen, all pages, navigation, footer, and backend API routes
