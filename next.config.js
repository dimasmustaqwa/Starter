const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const routes = require('./routes');

const getRoutes = {
  exportPathMap: routes
};

const router = module.exports = {
  getRoutes
}

module.exports = withPlugins([
  router,
  [withFonts],
  [withSass]
]);