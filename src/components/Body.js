import { useContext, useEffect, useState } from "react";
import Card, { withPromotedLabel } from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, SetUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const ResturantPromotedLabel = withPromotedLabel(Card);

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
    <div className="m-2">
      <h1 className="text-3xl font-bold text-center my-4">
        Welcome to our website!
      </h1>

      {/* Search Bar */}
      <div className="searchBar flex flex-col sm:flex-row items-center justify-center m-4 p-4 space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 rounded-lg shadow-lg">
        <input
          type="text"
          className="border border-solid border-black rounded p-2 w-full sm:w-auto"
          placeholder="Search Restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-colors w-full sm:w-auto"
          onClick={() => {
            const filteredResturant = listOfResturant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturant(filteredResturant);
          }}
        >
          Search
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition-colors w-full sm:w-auto"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="">
          <input
            type="text"
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => SetUserInfo(e.target.value)}
          />
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredResturant.map((resturant) => (
          <Link
            to={"/restaurants/" + resturant.info.id}
            key={resturant.info.id}
          >
            {resturant.info.promoted ? (
              <ResturantPromotedLabel resData={resturant} />
            ) : (
              <Card resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
