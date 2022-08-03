module.exports = {
  stories: [
    "../**/*.stories.mdx",
    "../pages/**/*.stories.@(jsx)",
    "../components/**/*.stories.@(jsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
