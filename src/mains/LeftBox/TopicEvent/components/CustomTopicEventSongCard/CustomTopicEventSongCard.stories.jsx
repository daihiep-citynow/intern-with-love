import CustomTopicEventSongCardComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Topic Event/CustomTopicEventSongCard",
  component: CustomTopicEventSongCardComponent,
};

const Template = (args) => <CustomTopicEventSongCardComponent {...args} />;

export const CustomTopicEventSongCard = Template.bind({});
CustomTopicEventSongCard.args = {
  src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  title: "mua dong khong lanh",
  artist: "asdad",
};
