const path = require('path');
module.exports = {
  webpack: (config) => {
    config.resolve.alias['@radix-ui/react-dropdown-menu'] = path.resolve(__dirname, 'node_modules/@radix-ui/react-dropdown-menu');
    return config;
  },
};
