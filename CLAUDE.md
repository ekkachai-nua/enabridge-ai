# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern React website for Enabridge, an AI integration solutions company. The site is built with Vite, TypeScript, and features a bilingual (English/Thai) interface for AI consulting services. The project is integrated with Lovable.dev for automated deployment and includes a comprehensive company profile presentation.

## Development Commands

```bash
# Start development server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development (useful for debugging)
npm run build:dev

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with custom emerald theme
- **UI Components**: shadcn/ui component library
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Netlify with SPA redirect configuration

## Architecture

### Core Application Structure

- **App.tsx**: Main application with React Router setup and providers (React Query, Tooltips, Toasters)
- **pages/**: Contains route components
  - `Index.tsx`: Main landing page with hero, services, and contact form
  - `CompanyProfile.tsx`: Interactive slide presentation for business pitches
  - `NotFound.tsx`: 404 error page
- **components/**: Reusable UI components
  - Page-level components (Hero, Services, LeadForm, Navbar, Footer)
  - `ui/`: shadcn/ui component library with 30+ components

### Key Components

#### Hero Component (`src/components/Hero.tsx`)
- Features animated SVG logo and floating path animations using Framer Motion
- Bilingual hero text (English/Thai)
- Custom EnabridgeLogo SVG component
- Complex animated background with 48 floating paths

#### CompanyProfile Component (`src/pages/CompanyProfile.tsx`)
- Interactive slide presentation with 9 slides
- Keyboard navigation (arrow keys, escape)
- Company information, founder spotlight, services, and contact details
- Embedded SVG logo with custom styling

#### LeadForm Component (`src/components/LeadForm.tsx`)
- Integrated with Make.com webhook for form submissions
- Thai language form fields with validation
- Toast notifications for success/error states
- Uses custom glass morphism styling

### Styling System

- **Design System**: Custom theme extending Tailwind with emerald color palette
- **Glass Morphism**: Custom `.glass` utility class for backdrop blur effects
- **Typography**: Thai font support with `font-thai` class
- **Animations**: Custom keyframes for fadeIn and float effects
- **Color Scheme**: Emerald-focused palette (emerald-400, emerald-500, emerald-600)

### Component Organization

The project follows atomic design principles with shadcn/ui components in the `ui/` directory. All path aliases are configured through `@/` pointing to the `src/` directory.

### State Management

- React Query for server state and caching
- React Hook Form for form state management
- Component-level state with React hooks
- Toast state managed through custom useToast hook

## External Integrations

- **Lovable.dev**: Automated deployment and git integration
- **Make.com Webhook**: Form submission handling at `https://hook.us1.make.com/hgz01p0nu1nh3ml8mom5xv5wmbiemova`
- **Netlify**: Production hosting with SPA routing support

## Important Notes

- The project uses a custom SVG logo that appears in multiple locations
- All user-facing text includes Thai translations
- Form submission integrates with external webhook service
- The company profile is a full-screen slide presentation component
- Custom animations and glass morphism effects are used throughout
- The build process is optimized for production with esbuild minification