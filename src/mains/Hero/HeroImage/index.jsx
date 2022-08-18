import Image from "next/image";

const HeroImage = ({ src }) => (
  <div>
    <Image src={src} width={1170} height={420} />
  </div>
);

export default HeroImage;
