import Image from "next/image";

const TopMVImage = ({ src, width = 110, height = 62 }) => (
  <div>
    <Image src={src} width={width} height={height} objectFit="contain" />
  </div>
);

export default TopMVImage;
