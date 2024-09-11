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
