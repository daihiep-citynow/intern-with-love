const StylelintPlugin = require("stylelint-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["stc-id.nixcdn.com", "avatar-ex-swe.nixcdn.com"],
  },

  // eslint-disable-next-line
  webpack: (config, options) => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
