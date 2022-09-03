// libs
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import MailCopyright from "@/layouts/components/Footer/components/MailCopyright";

it("Unit test > Mail Copyright", () => {
  render(<MailCopyright />);
  const element = screen.getByText(/support/);
  expect(element).toHaveTextContent("@");
});
