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
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
  traffic: 1233,
};
