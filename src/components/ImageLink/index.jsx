import Image from "next/image";
import Link from "next/link";

const ImageLink = ({ src, href, width = 100, height = 100 }) => (
  <Link href={href}>
    <a>
      <Image
        src={src}
        alt="beta"
        width={width}
        height={height}
        objectFit="contain"
        placeholder="blur"
      />
    </a>
  </Link>
);

export default ImageLink;
