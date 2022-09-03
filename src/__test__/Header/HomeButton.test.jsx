// libs
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
// components
import HomeButton from "@/layouts/components/Header/components/HomeButton";

it("Unit test > Home Button", () => {
  render(<HomeButton />);
});
