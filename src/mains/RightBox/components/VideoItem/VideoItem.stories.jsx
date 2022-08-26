import VideoItemComponent from ".";

export default {
  title: "Mains/RightBox/Top Video/Components/Top Video Items/Components/Video Item",
  component: VideoItemComponent,
};

const Template = (args) => <VideoItemComponent {...args} />;

export const VideoItem = Template.bind({});
VideoItem.args = {
  VideoType: false,
  index: 1,
  title: "asdhsd",
  artist: "sadasd",
  image: "https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg",
};
