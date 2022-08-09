import Footer from "./index";

export default {
  title: "Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Cooperation = Template.bind({});
Cooperation.args = {
  primary: "footer",
  label: "Footer",
};
