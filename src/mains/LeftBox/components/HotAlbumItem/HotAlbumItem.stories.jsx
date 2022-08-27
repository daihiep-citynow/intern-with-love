import HotAlbumItemComponent from ".";

export default {
  title: "Mains/LeftBox/Components/Hot Album/Components/Hot Album Item",
  component: HotAlbumItemComponent,
};

const Template = (args) => <HotAlbumItemComponent {...args} />;

export const HotAlbumItem = Template.bind({});
HotAlbumItem.args = {
  src: "https://intern-with-love.sgp1.digitaloceanspaces.com/hot-song/1661506338944_300.jpg",
};
