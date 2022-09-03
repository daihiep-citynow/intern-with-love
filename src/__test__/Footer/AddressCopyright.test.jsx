// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import AddressCopyright from "@/layouts/components/Footer/components/AddressCopyright";

it("Unit test > Address Copyright", () => {
  render(<AddressCopyright />);
  const element = screen.getByText(/Tầng/);
  expect(element).toHaveTextContent("19");
});
