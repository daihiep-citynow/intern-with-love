import HotTopicsItemComponent from ".";

export default {
  title: "Mains/RightBox/Hot Topics/Components/Hot Topics Items/Components/Hot Topics Item",
  component: HotTopicsItemComponent,
};

const Template = (args) => <HotTopicsItemComponent {...args} />;

export const HotTopicsItem = Template.bind({});
HotTopicsItem.args = {
  src: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
  href: "/",
  width: 300,
  height: 100,
};
