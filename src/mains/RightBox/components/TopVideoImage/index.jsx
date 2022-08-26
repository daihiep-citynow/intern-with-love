import Image from "next/image";

const TopVideoImage = ({ src, width = 110, height = 62 }) => (
  <div>
    <Image src={src} width={width} height={height} objectFit="cover" />
  </div>
);

export default TopVideoImage;
