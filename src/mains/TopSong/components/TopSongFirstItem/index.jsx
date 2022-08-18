import SongItem from "../SongItem";

const TopSongFirstItem = ({ title, artist }) => (
  <SongItem songType="true" title={title} artist={artist} />
);

export default TopSongFirstItem;
