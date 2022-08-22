import HeroImageComponent from ".";

export default {
  title: "Mains/Hero/Components",
  component: HeroImageComponent,
};

const Template = (args) => <HeroImageComponent {...args} />;

export const HeroImage = Template.bind({});

HeroImage.args = {
  src: "https://avatar-ex-swe.nixcdn.com/slideshow/2022/06/24/0/b/8/9/1656061063095_org.jpg",
};
