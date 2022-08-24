import TopMVItemComponent from ".";

export default {
  title: "Mains/RightBox/Top MV/Components/Top MV Items/Components/Top MV Item",
  component: TopMVItemComponent,
};

const Template = (args) => <TopMVItemComponent {...args} />;

export const TopMVItem = Template.bind({});
TopMVItem.args = {
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
  title: "asdasdsd",
  artist: "asdasdas",
};
