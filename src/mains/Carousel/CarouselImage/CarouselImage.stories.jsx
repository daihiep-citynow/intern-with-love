import HeroImageComponent from ".";

export default {
  title: "Mains/Hero/Components",
  component: HeroImageComponent,
};

const Template = (args) => <HeroImageComponent {...args} />;

export const HeroImage = Template.bind({});

HeroImage.args = {
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
};
