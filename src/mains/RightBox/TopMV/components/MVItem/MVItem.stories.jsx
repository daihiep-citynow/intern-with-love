import MVItemComponent from ".";

export default {
  title: "Mains/RightBox/Top MV/Components/Top MV Items/Components/MV Item",
  component: MVItemComponent,
};

const Template = (args) => <MVItemComponent {...args} />;

export const MVItem = Template.bind({});
MVItem.args = {
  mvType: false,
  index: 1,
  title: "asdhsd",
  artist: "sadasd",
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
};
