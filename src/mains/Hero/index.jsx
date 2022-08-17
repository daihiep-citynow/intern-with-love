// libraries
import { Carousel } from "antd";
// components
import HeroImage from "./HeroImage";

const Hero = () => (
  <div className="hero-wrapper">
    <Carousel autoplay>
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/06/24/0/b/8/9/1656061063095_org.jpg" />
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/10/b/0/c/a/1660125860210_org.jpg" />
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/11/7/2/1/5/1660189435482_org.jpg" />
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/09/8/7/7/1/1660040822018_org.jpg" />
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/09/8/7/7/1/1660027698345_org.jpg" />
      <HeroImage src="https://avatar-ex-swe.nixcdn.com/slideshow/2022/08/08/1/9/5/e/1659945107500_org.jpg" />
    </Carousel>
  </div>
);

export default Hero;
