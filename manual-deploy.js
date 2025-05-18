const ghpages = require('gh-pages');
const path = require('path');

ghpages.publish(
  path.join(process.cwd(), 'dist'),
  {
    message: 'Manual deploy to GitHub Pages',
    branch: 'gh-pages',
    repo: 'https://github.com/mto/MarkusMagicHjemmeside.git',
    dotfiles: true
  },
  (err) => {
    if (err) {
      console.error('Deploy failed:', err);
    } else {
      console.log('Deploy complete!');
    }
  }
);