// libs
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import SongCard from "@/mains/Carousel/CarouselImage";

it("Unit test > Footer Image", () => {
  render(
    <SongCard src="https://intern-with-love.sgp1.digitaloceanspaces.com/carousel/1661513319409_org.jpg" />,
  );
});
