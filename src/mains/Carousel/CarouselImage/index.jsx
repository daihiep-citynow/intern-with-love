import Image from "next/image";

const HeroImage = ({ src }) => (
  <div>
    <Image src={src} width={1170} height={420} placeholder="blur" />
  </div>
);

export default HeroImage;
