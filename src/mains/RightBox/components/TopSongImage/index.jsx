import Image from "next/image";

const TopSongImage = ({ src }) => (
  <div>
    <Image src={src} width={100} height={100} objectFit="contain" placeholder="blur" />
  </div>
);

export default TopSongImage;
