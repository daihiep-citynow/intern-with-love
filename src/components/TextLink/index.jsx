import Link from "next/link";

const ImageText = ({ text, href, names }) => (
  <Link href={href}>
    <a>
      <span className={names}>{text}</span>
    </a>
  </Link>
);

export default ImageText;
