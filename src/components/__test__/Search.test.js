import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/fetchMockResturantData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
test("should render the search card functionality ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />;
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(10);

  // first checking the search input and adding custom testid to the input
  const searchInput = screen.getByTestId("searchInput");

  //on click of search input
  fireEvent.change(searchInput, { target: { value: "Maa" } });

  // checking the search button
  const searchButton = screen.getByRole("button", { name: "Search" });

  // on clicking the search button
  fireEvent.click(searchButton);

  //get all the test cases i.e. get all the cards and adding custom testid
  const searchResult = screen.getAllByTestId("resCard");

  // checking the length of the search result cards which should be 1 for "Maa" as it is the only resturant in the mock data.
  expect(searchResult.length).toBe(1);
});

test("should render the Top Rated Restaurants functionality ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />;
      </BrowserRouter>
    )
  );

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedButton);

  const topRatedResturant = screen.getAllByTestId("resCard");

  expect(topRatedResturant.length).toBe(6);
});
