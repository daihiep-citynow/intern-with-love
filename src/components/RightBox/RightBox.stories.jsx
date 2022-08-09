import RightBox from ".";

export default {
  title: "RightBox",
  component: RightBox,
};

const Template = (args) => <RightBox {...args} />;

export const RightBoxBeta = Template.bind({});
RightBoxBeta.args = {
  primary: "right-wrapper",
  label: "RightBoxBeta",
};
