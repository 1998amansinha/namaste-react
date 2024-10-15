import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/redux/appStore";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Login button in the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole('button')
  const loginButton = screen.getByRole("button", { name: "Login" });
  //   const loginButton = screen.getByText('Login')

  expect(loginButton).toBeInTheDocument();
});

test("should render Cart in the Header Component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItems = screen.getByText("Cart - (0) items"); {/* Just To Check whether the render Cart item is 0 or not */}
  const cartItems = screen.getByText(/Cart/);
  {
    /* Just To Check whether the Cart item is present or not irrespective or the number*/
  }

  expect(cartItems).toBeInTheDocument();
});

test("should change from Login Button to Logout Button on Click Event ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
