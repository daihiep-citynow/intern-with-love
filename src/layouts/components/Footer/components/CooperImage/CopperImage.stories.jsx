import CooperImageComponent from ".";

export default {
  title: "Layouts/Footer/Footer Components/Footer Cooper/Components",
  component: CooperImageComponent,
};

const Template = (args) => <CooperImageComponent {...args} />;

export const CooperImage = Template.bind({});

CooperImage.args = {
  src: "https://stc-id.nixcdn.com/v11/images/footer/20.png",
  width: 195,
  height: 100,
};
