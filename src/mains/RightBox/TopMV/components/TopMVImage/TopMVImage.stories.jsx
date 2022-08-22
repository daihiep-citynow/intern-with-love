import TopMVImageComponent from ".";

export default {
  title: "Mains/RightBox/Top MV/Components/Top MV Items/Components/Top MV Image",
  component: TopMVImageComponent,
};

const Template = (args) => <TopMVImageComponent {...args} />;

export const TopMVImage = Template.bind({});
TopMVImage.args = { src: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" };
