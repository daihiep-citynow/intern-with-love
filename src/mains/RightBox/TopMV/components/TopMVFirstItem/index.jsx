import MVItem from "../MVItem";

const TopMVFirstItem = ({ image, title, artist }) => (
  <MVItem mvType="first" image={image} title={title} artist={artist} />
);

export default TopMVFirstItem;
