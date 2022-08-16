import { Carousel } from "antd";
import Image from "next/image";

const Hero = () => (
  <div className="hero-wrapper">
    <Carousel autoplay>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/06/24/0/b/8/9/1656061063095_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/10/b/0/c/a/1660125860210_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/11/7/2/1/5/1660189435482_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/09/8/7/7/1/1660028743322_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/09/8/7/7/1/1660040822018_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/09/8/7/7/1/1660027698345_org.jpg"
          width={1170}
          height={420}
        />
      </div>
      <div>
        <Image
          src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/08/1/9/5/e/1659945107500_org.jpg"
          width={1170}
          height={420}
        />
      </div>
    </Carousel>
  </div>
);

export default Hero;
