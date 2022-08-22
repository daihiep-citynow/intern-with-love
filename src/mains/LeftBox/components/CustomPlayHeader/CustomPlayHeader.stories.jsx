import CustomPlayHeaderComponent from ".";

export default {
  title: "Mains/LeftBox/Custom Play Header",
  component: CustomPlayHeaderComponent,
};

const Template = (args) => <CustomPlayHeaderComponent {...args} />;

export const CustomPlayHeader = Template.bind({});

CustomPlayHeader.args = {
  text: "Nhac cua tuio",
};
