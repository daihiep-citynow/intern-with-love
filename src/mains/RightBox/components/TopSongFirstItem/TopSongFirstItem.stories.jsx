import TopSongFirstItemComponent from ".";

export default {
  title: "Mains/RightBox/TopSong/Components/Top Song Items/Components/Top Song First Item",
  component: TopSongFirstItemComponent,
};

const Template = (args) => <TopSongFirstItemComponent {...args} />;

export const TopSongFirstItem = Template.bind({});
TopSongFirstItem.args = { title: "asdhsd", artist: "sadasd" };
