// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import PhoneCopyright from "@/layouts/components/Footer/components/PhoneCopyright";

it("Unit test > Mail Copyright", () => {
  render(<PhoneCopyright />);
  const element = screen.getByText(/028/);
  expect(element).toHaveTextContent("7979");
});
