import TopVideoItemComponent from ".";

export default {
  title: "Mains/RightBox/Top Video/Components/Top Video Items/Components/Top Video Item",
  component: TopVideoItemComponent,
};

const Template = (args) => <TopVideoItemComponent {...args} />;

export const TopVideoItem = Template.bind({});
TopVideoItem.args = {
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
  title: "asdasdsd",
  artist: "asdasdas",
};
