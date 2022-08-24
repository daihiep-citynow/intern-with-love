import HotVideoLargeItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Video/Components/Hot Video Large Item",
  component: HotVideoLargeItemComponent,
};

const Template = (args) => <HotVideoLargeItemComponent {...args} />;

export const HotVideoLargeItem = Template.bind({});
HotVideoLargeItem.args = {
  title: "Kill This Love (Mini Album)",
  src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/04/d/1/5/5/1656903740420_268.jpg",
  artist: "MONO, Onionn",
  traffic: 12312,
  duration: "2:23",
};
