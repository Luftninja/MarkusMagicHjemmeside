#!/bin/bash

# Build the project
npm run build

# Navigate to the build directory
cd dist

# Initialize git if not already done
if [ ! -d ".git" ]; then
  git init
  git checkout -b gh-pages
else
  git checkout gh-pages
fi

# Add all files
git add .

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Force push to the gh-pages branch
git push -f origin gh-pages

# Return to the project root
cd ..