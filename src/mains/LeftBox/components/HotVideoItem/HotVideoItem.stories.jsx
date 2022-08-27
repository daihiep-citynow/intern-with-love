import HotVideoItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Video/Components/Hot Video Item",
  component: HotVideoItemComponent,
};

const Template = (args) => <HotVideoItemComponent {...args} />;

export const HotVideoItem = Template.bind({});
HotVideoItem.args = {
  title: "Kill This Love (Mini Album)",
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
  artist: "MONO, Onionn",
  traffic: 12312,
  duration: "2:23",
};
