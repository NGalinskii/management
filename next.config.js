const path = require('path');

module.exports = {
  output: 'export',

  basePath: '/nextjs-github-pages',

  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
