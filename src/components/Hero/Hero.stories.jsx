import Hero from ".";

export default {
  title: "Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const HeroBeta = Template.bind({});

HeroBeta.args = {
  primary: "hero-wrapper",
  label: "HeroBeta",
};
