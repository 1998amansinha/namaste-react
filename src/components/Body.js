import resList from "../utils/constant";
import Card from "./Card";

const Body = () => {
  const TopRatedResturants = function () {
    console.log( resList.filter((resturant) => resturant.info.avgRating > 4.5));
  };

  return (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <button className="search-btn" onClick={TopRatedResturants}>Top Rated Resturants</button>
      </div>
      <div className="cards">
        {resList.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
