import LeftBox from ".";

export default {
  title: "LeftBox",
  component: LeftBox,
};

const Template = (args) => <LeftBox {...args} />;

export const LeftBoxBeta = Template.bind({});
LeftBoxBeta.args = {
  primary: "left-wrapper",
  label: "LeftBoxBeta",
};
