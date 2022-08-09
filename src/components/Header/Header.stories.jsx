import Header from ".";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderBeta = Template.bind({});
HeaderBeta.args = {
  primary: "header",
  label: "HeaderBeta",
};
