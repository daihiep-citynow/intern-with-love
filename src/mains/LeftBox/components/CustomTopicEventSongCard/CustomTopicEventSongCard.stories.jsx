import CustomTopicEventSongCardComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Topic Event/CustomTopicEventSongCard",
  component: CustomTopicEventSongCardComponent,
};

const Template = (args) => <CustomTopicEventSongCardComponent {...args} />;

export const CustomTopicEventSongCard = Template.bind({});
CustomTopicEventSongCard.args = {
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
  title: "mua dong khong lanh",
  artist: "asdad",
};
