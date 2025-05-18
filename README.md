# Markus Magic Hjemmeside

A React-based web application showcasing magical products using Vite, TypeScript, and React Router, deployed on GitHub Pages.

## Features

- Product listing with images, descriptions, and prices
- Detailed product view with additional product information
- Responsive design for mobile and desktop
- GitHub Pages deployment for easy access
- JSON-based product data structure

## Technologies Used

- React 19
- TypeScript
- Vite 6
- React Router 7
- GitHub Pages for deployment
- CSS with responsive design

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 7 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/MarkusMagicHjemmeside.git
   cd MarkusMagicHjemmeside
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/`

## Project Structure

```
MarkusMagicHjemmeside/
├── public/              # Static assets
│   └── data/            # JSON data files
│       └── products.json
├── src/                 # Source files
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── ProductList.tsx
│   │   └── ProductDetail.tsx
│   ├── services/        # API and service functions
│   │   └── productService.ts
│   ├── types/           # TypeScript type definitions
│   │   └── Product.ts
│   ├── App.css          # Main stylesheet
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Deployment

To deploy the application to GitHub Pages:

```bash
npm run deploy
```

This will build the application and deploy it to the `gh-pages` branch of your repository.

## Adding or Modifying Products

Products are stored in `public/data/products.json`. To add or modify products, edit this file following the existing structure:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Short description",
      "price": 19.99,
      "imageUrl": "https://example.com/image.jpg",
      "category": "Category",
      "inStock": true,
      "details": "Detailed description..."
    }
  ]
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
