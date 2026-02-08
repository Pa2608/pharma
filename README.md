# Pharma - Pharmaceutical E-Commerce Platform

A modern, responsive pharmaceutical e-commerce website built with React, TypeScript, and Vite. This platform provides a seamless shopping experience for customers to browse and purchase pharmaceutical products.

## Features

- **Responsive Design**: Mobile-first responsive layout using modern CSS
- **Product Catalog**: Browse and filter pharmaceutical products by category
- **Shopping Cart**: Add/remove items and manage purchases
- **Product Details**: Detailed information for each pharmaceutical product
- **Contact Management**: Integrated contact form with validation
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **WhatsApp Integration**: Direct WhatsApp button for customer support
- **User Dashboard**: Personalized dashboard for customers
- **Form Validation**: Built-in validation using React Hook Form and Zod

## Tech Stack

- **Frontend Framework**: React 19.2 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Form Management**: React Hook Form
- **Schema Validation**: Zod
- **Icons**: React Icons
- **Styling**: CSS with CSS animations
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pharma
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- **`npm run dev`**: Start the development server
- **`npm run build`**: Build the project for production
- **`npm run lint`**: Run ESLint to check code quality
- **`npm run preview`**: Preview the production build locally

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components (WhatsApp button)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Products, About, etc.)
│   └── ui/               # UI components (Button, Card, Icon)
├── pages/                # Page components (About, Contact, Products, Dashboard)
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── utils/                # Utility functions and constants
├── styles/               # Global styles and animations
├── assets/               # Images and media files
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Key Components

- **Header**: Navigation and branding
- **Footer**: Footer information and links
- **HeroSection**: Landing page hero banner
- **ProductCategories**: Product category showcase
- **AboutSection**: Company information
- **WhyChooseUs**: Competitive advantages
- **CTASection**: Call-to-action section
- **WhatsAppButton**: Floating WhatsApp support button

## Pages

- **Home**: Landing page with all sections
- **About**: Detailed company information
- **Products**: Product catalog and filtering
- **Contact**: Contact form and information
- **Dashboard**: User dashboard

## Styling

The project uses a modular CSS approach with:
- Global styles in `styles/globals.css`
- CSS variables in `styles/variables.css`
- Animations in `styles/animations.css`
- Component-specific styles alongside component files

## Development

### Code Quality

Run linting to check code quality:
```bash
npm run lint
```

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Git Workflow

The project includes a `.gitignore` file to prevent tracking of:
- `node_modules/`
- `dist/` (build output)
- `.env` files
- IDE configuration files
- OS-specific files

## Environment Variables

Create a `.env` file in the root directory for environment-specific variables:
```
VITE_API_URL=your_api_url_here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private. All rights reserved.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
