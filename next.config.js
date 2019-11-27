// next.config.js
require('dotenv').config();
const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  env: {
    API_HOST: 'https://api.example.com'
  },
  optimizeImagesInDev: true,
});
