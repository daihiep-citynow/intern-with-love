import WeeklyArtistItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Weekly Artist/Components",
  component: WeeklyArtistItemComponent,
};

const Template = (args) => <WeeklyArtistItemComponent {...args} />;

export const WeeklyArtistItem = Template.bind({});
WeeklyArtistItem.args = {
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
  artist: "TAC",
};
