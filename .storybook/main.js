module.exports = {
  stories: [
    "../src/components/**/*.stories.@(jsx)",
    "../src/views/**/*.stories.@(jsx)",
    "../src/mains/**/*.stories.@(jsx)",
    "../src/layouts/**/*.stories.@(jsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "storybook-addon-next",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-contexts/register",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
