import CustomTopicEventHeaderComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Topic Event",
  component: CustomTopicEventHeaderComponent,
};

const Template = (args) => <CustomTopicEventHeaderComponent {...args} />;

export const CustomTopicEventHeader = Template.bind({});
CustomTopicEventHeader.args = {
  text: "Nhac cua tui",
};
