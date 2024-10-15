import { screen, render } from "@testing-library/react";
import Card from "../Card";
import MOCK_DATA from "../mocks/CardMock.json";
import "@testing-library/jest-dom";
test("should card component is loaded successfully or not", () => {
  render(<Card resData={MOCK_DATA} />);

  const name = screen.getByText("Asha Tiffins");

  expect(name).toBeInTheDocument();
});
