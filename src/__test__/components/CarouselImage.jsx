// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import CarouselImage from "@/mains/Carousel/CarouselImage";

it("Unit test > Footer Image", () => {
  // arrange
  const src = "https://intern-with-love.sgp1.digitaloceanspaces.com/carousel/1661513319409_org.jpg";
  // action
  render(<CarouselImage src={src} />);
  const element = screen.getByRole("img");
  // assert
  expect(element).toBeInTheDocument();
});
