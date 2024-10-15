import { act, fireEvent, render, screen } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import MOCK_DATA from "../mocks/MenuItemsMock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  })
);

test("should update the cart items on click of add", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText("Meals (4)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("menuItem").length).toBe(4);

  const addItems = screen.getAllByRole("button", { name: "Add +" });
  expect(screen.getByText("Cart - (0) items")).toBeInTheDocument();
  fireEvent.click(addItems[0]);
  expect(screen.getByText("Cart - (1) items")).toBeInTheDocument();
  fireEvent.click(addItems[1]);
  expect(screen.getByText("Cart - (2) items")).toBeInTheDocument();

  // expect(screen.getAllByTestId('menuItem').length).toBe(6)
});
