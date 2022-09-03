// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import CooperImage from "@/layouts/components/Footer/components/CooperImage";

it("Unit test > Cooper Image", () => {
  const src = "https://intern-with-love.sgp1.digitaloceanspaces.com/cooper/15.png";
  render(<CooperImage src={src} />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("src");
});
