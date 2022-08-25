import HotAlbumItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Album/Components/Hot Album Item",
  component: HotAlbumItemComponent,
};

const Template = (args) => <HotAlbumItemComponent {...args} />;

export const HotAlbumItem = Template.bind({});
HotAlbumItem.args = {
  src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
};
