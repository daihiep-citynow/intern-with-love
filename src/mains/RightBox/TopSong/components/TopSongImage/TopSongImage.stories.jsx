import TopSongImageComponent from ".";

export default {
  title: "Mains/RightBox/TopSong/Components/Top Song Items/Components/Top Song Image",
  component: TopSongImageComponent,
};

const Template = (args) => <TopSongImageComponent {...args} />;

export const TopSongImage = Template.bind({});
TopSongImage.args = { src: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg" };
