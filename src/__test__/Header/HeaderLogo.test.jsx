// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import HeaderLogo from "@/layouts/components/Header/HeaderLogo";

it("Unit test > Header Logo", () => {
  render(<HeaderLogo />);
  const element = screen.getByRole("img");
  expect(element).toHaveAttribute("src");
});
