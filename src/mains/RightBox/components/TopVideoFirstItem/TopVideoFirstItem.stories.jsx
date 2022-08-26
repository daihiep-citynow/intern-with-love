import TopVideoFirstItemComponent from ".";

export default {
  title: "Mains/RightBox/Top Video/Components/Top Video Items/Components/Top Video First Item",
  component: TopVideoFirstItemComponent,
};

const Template = (args) => <TopVideoFirstItemComponent {...args} />;

export const TopVideoFirstItem = Template.bind({});
TopVideoFirstItem.args = {
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
  title: "asdhsd",
  artist: "sadasd",
};
