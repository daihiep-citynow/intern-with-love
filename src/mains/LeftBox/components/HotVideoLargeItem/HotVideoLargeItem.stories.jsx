import HotVideoLargeItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Video/Components/Hot Video Large Item",
  component: HotVideoLargeItemComponent,
};

const Template = (args) => <HotVideoLargeItemComponent {...args} />;

export const HotVideoLargeItem = Template.bind({});
HotVideoLargeItem.args = {
  title: "Kill This Love (Mini Album)",
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
  artist: "MONO, Onionn",
  traffic: 12312,
  duration: "2:23",
};
