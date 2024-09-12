import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturantList, setResturantList] = useState([]);
  // const [searchText, setSearchText] = useState("");

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
        {/* <input type="text" value={searchText} />
        <button className="search-btn" >Search</button> */}
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
        {resturantList.map((resturants) => (
          <Card key={resturants.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
