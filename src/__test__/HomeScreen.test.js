/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../views/HomeScreen";

it("renders homepage unchanged", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
