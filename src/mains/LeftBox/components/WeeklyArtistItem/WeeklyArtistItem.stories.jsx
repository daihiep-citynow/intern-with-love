import WeeklyArtistItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Weekly Artist/Components",
  component: WeeklyArtistItemComponent,
};

const Template = (args) => <WeeklyArtistItemComponent {...args} />;

export const WeeklyArtistItem = Template.bind({});
WeeklyArtistItem.args = {
  src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/03/22/2/2/c/b/1647915878760_600.jpg",
  artist: "TAC",
};
