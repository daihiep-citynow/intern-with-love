import HotSongItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Song/Components/Hot Song Item",
  component: HotSongItemComponent,
};

const Template = (args) => <HotSongItemComponent {...args} />;

export const HotSongItem = Template.bind({});
HotSongItem.args = {
  title: "Million Dollar Boy",
  artist: "16 Typh",
  src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  traffic: 1233,
};
