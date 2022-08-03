const StylelintPlugin = require("stylelint-webpack-plugin"); // eslint-disable-line

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // eslint-disable-next-line
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
