import TopVideoImageComponent from ".";

export default {
  title: "Mains/RightBox/Top Video/Components/Top Video Items/Components/Top Video Image",
  component: TopVideoImageComponent,
};

const Template = (args) => <TopVideoImageComponent {...args} />;

export const TopVideoImage = Template.bind({});
TopVideoImage.args = {
  src: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
};
