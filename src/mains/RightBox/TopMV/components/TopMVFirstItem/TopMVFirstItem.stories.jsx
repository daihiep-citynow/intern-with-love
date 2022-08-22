import TopMVFirstItemComponent from ".";

export default {
  title: "Mains/RightBox/Top MV/Components/Top MV Items/Components/Top MV First Item",
  component: TopMVFirstItemComponent,
};

const Template = (args) => <TopMVFirstItemComponent {...args} />;

export const TopMVFirstItem = Template.bind({});
TopMVFirstItem.args = {
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
  title: "asdhsd",
  artist: "sadasd",
};
