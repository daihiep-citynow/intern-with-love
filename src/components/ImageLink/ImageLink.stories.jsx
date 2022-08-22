import ImageLinkComponent from ".";

export default {
  title: "Components/Common",
  component: ImageLinkComponent,
};

const Template = (args) => <ImageLinkComponent {...args} />;

export const ImageLink = Template.bind({});

ImageLink.args = {
  src: "",
  href: "/",
  width: 100,
  height: 100,
};
