# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

MarkusMagicHjemmeside is a React-based web application for showcasing magical products. It uses Vite, TypeScript, and React Router, and is deployed on GitHub Pages.

## Common Commands

### Development

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173/)
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

### Deployment

```bash
# Automated deployment to GitHub Pages (predeploy + gh-pages)
npm run deploy

# Manual deployment using Node.js script
npm run manual-deploy
```

## Architecture

### Data Flow

1. Product data is stored in `public/data/products.json`
2. `productService.ts` fetches and provides data to components
3. React components render the UI based on the data
4. React Router handles navigation between pages

### Component Structure

- **App.tsx**: Main component with HashRouter and route definitions
- **ProductList.tsx**: Displays the grid of all products
- **ProductDetail.tsx**: Shows detailed information for a single product

### Key Types

The main data structure is the `Product` interface in `src/types/Product.ts`:

```typescript
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  inStock: boolean;
  details: string;
}
```

## Configuration

- **Vite**: Configured to use relative paths for GitHub Pages deployment
- **TypeScript**: Split into separate configs for app and node with strict type checking
- **ESLint**: Set up with recommended rules for TypeScript and React
- **GitHub Pages**: Configured for deployment to the `gh-pages` branch

## Adding Products

To add new products, edit `public/data/products.json` following the existing structure. Each product requires all fields specified in the Product interface.