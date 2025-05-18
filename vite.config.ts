import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Custom plugin to add cache-control headers for data files
    {
      name: 'no-cache-json',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // Set no-cache headers for JSON files in the data directory
          if (req.url && req.url.includes('/data/') && req.url.endsWith('.json')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
            res.setHeader('Pragma', 'no-cache');
            res.setHeader('Expires', '0');
          }
          next();
        });
      },
      // Generate a _headers file for Netlify/GitHub Pages to control caching
      closeBundle() {
        const headersContent = `
# Disable caching for JSON data files
/data/*.json
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
`;
        fs.writeFileSync(path.join('dist', '_headers'), headersContent);
      }
    }
  ],
  base: './', // Relative paths for GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
})
