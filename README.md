# Silvana Restrepo Portfolio - React Version

A sophisticated, luxury-focused portfolio website for Silvana Restrepo, an Experience Architect and Strategic Designer. This project has been converted from Next.js to a standard React application with Vite for optimal performance and development experience.

## 🎨 Design Philosophy

This portfolio embodies **sophisticated luxury design** with:
- **No pure white backgrounds** - Warm, sophisticated color palette
- **Perfect typography** - Cormorant Garamond (serif) + Inter (sans)
- **8px grid system** - Consistent spacing and alignment
- **Responsive design** - Mobile-first approach with iOS optimizations
- **Smooth animations** - Framer Motion for elegant interactions

## 🚀 Features

- **Responsive Design** - Optimized for all devices and orientations
- **Sophisticated Typography** - Custom font pairing with fluid scaling
- **Luxury Color System** - Warm, sophisticated palette without pure whites
- **Smooth Animations** - Framer Motion for elegant interactions
- **Accessibility** - WCAG compliant with proper focus management
- **Performance** - Optimized with Vite for fast development and builds
- **TypeScript** - Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful, customizable icons

## 📁 Project Structure

```
portfolio-react-project/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # Base UI components
│   │   └── ...            # Feature components
│   ├── pages/             # Page-level components
│   ├── lib/               # Utilities and design system
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # React entry point
├── package.json
├── tailwind.config.js     # Tailwind configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎯 Design System

### Colors
- **Background**: Warm cream (`#F5F2EF`)
- **Foreground**: Deep charcoal (`#262421`)
- **Primary**: Sophisticated dark (`#1F1D1B`)
- **Secondary**: Subtle warm gray (`#F0EDEA`)
- **Borders**: Elegant taupe (`#E5E1DD`)

### Typography
- **Serif**: Cormorant Garamond (300-700 weights)
- **Sans**: Inter (300-600 weights)
- **Fluid scaling** for responsive typography

### Spacing
- **8px grid system** with modular scale
- **Consistent increments** from 4px to 128px

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## 🎨 Customization

### Colors
Modify the color system in `src/styles/globals.css`:
```css
:root {
  --background: 26 27% 96%; /* Warm cream */
  --foreground: 26 4% 15%;  /* Deep charcoal */
  /* ... other colors */
}
```

### Typography
Update fonts in `src/styles/globals.css`:
```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-serif: "Cormorant Garamond", Georgia, Cambria, "Times New Roman", serif;
```

### Spacing
Modify the design system in `src/lib/design-system.ts`:
```typescript
export const DESIGN_SYSTEM = {
  spacing: {
    "2xs": "4px",
    xs: "8px",
    // ... customize spacing values
  }
}
```

## 📱 Responsive Design

The portfolio is optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large screens**: 1400px+

### Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1400px

## ♿ Accessibility

- **WCAG 2.1 AA compliant**
- **Keyboard navigation** support
- **Screen reader** friendly
- **Focus management** with visible focus indicators
- **Reduced motion** support
- **High contrast** mode support

## 🎭 Animations

Built with Framer Motion for smooth, performant animations:
- **Page transitions** with fade effects
- **Scroll-triggered** animations
- **Hover interactions** with lift effects
- **Loading states** with skeleton screens

## 🔧 Development

### Code Style
- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Component-based** architecture

### Component Structure
```typescript
interface ComponentProps {
  // Props interface
}

export function Component({ prop1, prop2 }: ComponentProps) {
  // Component logic
  return (
    // JSX
  )
}
```

## 📦 Dependencies

### Core
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `typescript`: ^5

### Styling
- `tailwindcss`: ^3.4.17
- `tailwindcss-animate`: ^1.0.7
- `autoprefixer`: ^10.4.20

### UI Components
- `@radix-ui/react-*`: Various Radix UI primitives
- `lucide-react`: ^0.454.0
- `class-variance-authority`: ^0.7.1
- `clsx`: ^2.1.1
- `tailwind-merge`: ^2.5.5

### Animations
- `framer-motion`: latest

### Forms
- `react-hook-form`: ^7.54.1
- `@hookform/resolvers`: ^3.9.1
- `zod`: ^3.24.1

### Build Tools
- `vite`: ^5.1.4
- `@vitejs/plugin-react`: ^4.2.1

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

### Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy with automatic builds

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- **Email**: hello@silvanarestrepo.com
- **Portfolio**: [silvanarestrepoportfolio.vercel.app](https://silvanarestrepoportfolio.vercel.app/)

---

**Designed with ❤️ by Silvana Restrepo**
*Experience Architect & Strategic Designer* 