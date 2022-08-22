import SongItemComponent from ".";

export default {
  title: "Mains/RightBox/TopSong/Components/Top Song Items/Components/Song Item",
  component: SongItemComponent,
};

const Template = (args) => <SongItemComponent {...args} />;

export const SongItem = Template.bind({});
SongItem.args = { songType: false, index: 1, title: "asdhsd", artist: "sadasd" };
