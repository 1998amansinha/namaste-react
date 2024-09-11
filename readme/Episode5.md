```javascript
import { useState } from "react";
import resList from "../utils/constant";
import Card from "./Card";

const Body = () => {
  const [resturantList, setResturantList] = useState(resList);

  return (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <button
          className="search-btn"
          onClick={() => {
            const TopRatedResturants = resList.filter((resturant) => resturant.info.avgRating > 4.5)
            setResturantList(TopRatedResturants)
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="cards">
        {resturantList.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

resList: Static, unchanging, original list of all restaurants (imported from ../utils/constant).
restaurantList: Dynamic, mutable state that reflects the current list of restaurants being displayed, which can be filtered or modified based on user interaction.

Example Flow:
Initial State: When the component first renders, restaurantList is set to resList (the full list of restaurants).
User Action: When a user clicks the "Top Rated Restaurants" button, the restaurantList is updated to contain only restaurants with a rating higher than 4.5.
UI Render: The component maps over restaurantList to render the restaurant cards, and this list can change based on filtering or resetting.