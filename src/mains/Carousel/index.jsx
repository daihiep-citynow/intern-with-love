// libs
import { useSelector } from "react-redux";
import { Carousel } from "antd";
// components
import HeroImage from "./CarouselImage";

const Hero = () => {
  const carouselList = useSelector((state) => state.carousel.list);

  return (
    <div className="hero-wrapper">
      <Carousel autoplay>
        {carouselList.map((item) => (
          <HeroImage key={item.id} src={item.src} />
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
