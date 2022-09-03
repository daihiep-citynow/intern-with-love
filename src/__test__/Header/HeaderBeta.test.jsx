// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import HeaderBeta from "@/layouts/components/Header/HeaderBeta";

it("Unit test > Header Beta", () => {
  render(<HeaderBeta />);
  const element = screen.getByRole("img");
  expect(element).toHaveAttribute("src");
});
