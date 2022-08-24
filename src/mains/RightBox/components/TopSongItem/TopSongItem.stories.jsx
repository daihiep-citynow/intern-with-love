import TopSongItemComponent from ".";

export default {
  title: "Mains/RightBox/TopSong/Components/Top Song Items/Components/Top Song Item",
  component: TopSongItemComponent,
};

const Template = (args) => <TopSongItemComponent {...args} />;

export const TopSongItem = Template.bind({});
TopSongItem.args = { index: 1, title: "asdhsd", artist: "sadasd" };
