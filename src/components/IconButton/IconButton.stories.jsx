import IconButtonWrapper from ".";

export default {
  title: "Components/Common",
  component: IconButtonWrapper,
};

const Template = (args) => <IconButtonWrapper {...args} />;

export const IconButton = Template.bind({});

IconButton.args = {
  title: "Đăng ký",
  onClick: () => {},
};
