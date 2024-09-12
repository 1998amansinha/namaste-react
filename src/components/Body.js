import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.9141099&lng=77.6371518&isDineoutCollection=false"
    );
    const json = await response.json();
    console.log(json);
    setResturantList(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  // Conditional Rendering
  if (!resturantList.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = resturantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setResturantList(filteredList);
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
