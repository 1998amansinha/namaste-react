import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import "../components/css/Body.css";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/api/seo/getListing?lat=12.9141099&lng=77.6371518&isDineoutCollection=false"
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>No Internet Connection. Please check your internet connection.</h1>
    );
  }

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
          <Link to={"/resturants/" + resturant.info.id} key={resturant.info.id}>
            <Card resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
