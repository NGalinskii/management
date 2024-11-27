const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: './',
  basePath: '/management',
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
