```js
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.9141099&lng=77.6371518&isDineoutCollection=false"
    );
    const json = await response.json();
    setListOfResturant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !listOfResturant.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search"
          onClick={() => {
            const filteredResturant = listOfResturant.filter(
              (
                res // filter over original resturantList
              ) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturant(filteredResturant);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="cards">
        {filteredResturant.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```
### Rendering Steps:

1. **Initial Render (Before API call)**:
   - **Page Load**: When the page first loads, React initializes the state variables. At this point, both `listOfRestaurant` and `filteredRestaurant` are empty arrays (`[]`), as you’ve initialized them with `useState([])`.
   - **UI Render (First render)**: Since `filteredRestaurant` is an empty array, the component renders the `<Shimmer />` component (your loading placeholder) because `!listOfRestaurant.length` is true.

2. **API Call (Inside `useEffect`)**:
   - **Fetching Data**: After the first render, the `useEffect()` hook runs (since it has an empty dependency array, meaning it runs once after the initial render). This triggers the `fetchData()` function, which fetches the restaurant data from the API.
   - **Updating State**: Once the API data is fetched, the `setListOfRestaurant` and `setFilteredRestaurant` functions are called, which update both the `listOfRestaurant` and `filteredRestaurant` with the fetched restaurant data.

3. **Re-render (After State Update)**:
   - **Re-render with Data**: After updating the state, React triggers a re-render of the component. Now, `filteredRestaurant` contains the fetched data (which, at this point, is unfiltered). The UI re-renders, and this time, the mapping happens over the `filteredRestaurant`, displaying the list of restaurants in your UI.
   - **At this stage**, since no filter or search has been applied yet, `filteredRestaurant` and `listOfRestaurant` hold the same data, which means the displayed list is unfiltered.

4. **User Interaction (Filtering/Search)**:
   - **Search or Filter Action**: When a user interacts with the search bar or clicks the "Top Rated Restaurants" button, the filtering logic kicks in. You filter the `listOfRestaurant`, and the filtered result is set to `filteredRestaurant`.
   - **Re-render with Filtered Data**: React re-renders the UI again, but now `filteredRestaurant` contains only the restaurants that match the search or rating filter. The UI updates to reflect the filtered list.

### To summarize:
- Initially, on page load, `filteredRestaurant` is empty, and the UI renders the loading component.
- After the API call, `filteredRestaurant` is populated with data, and the UI re-renders to display the unfiltered list.
- User interactions trigger filtering logic, updating `filteredRestaurant` and causing the UI to re-render with the filtered data.

So, as you mentioned, **for the initial render, `filteredRestaurant` is essentially unfiltered, and only after the API data is fetched does the filtering (if any) happen.** That’s why your approach of mapping over `filteredRestaurant` from the start works as expected.