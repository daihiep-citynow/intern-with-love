import CustomButtonWrapper from ".";

export default {
  title: "Components/Common",
  component: CustomButtonWrapper,
  argTypes: {
    buttonType: {
      options: ["sign-in", "sign-up"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <CustomButtonWrapper {...args} />;

export const CustomButton = Template.bind({});

CustomButton.args = {
  title: "Đăng ký",
};
