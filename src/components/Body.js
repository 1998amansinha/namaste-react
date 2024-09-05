import resList  from "../utils/constant";
import Card from "./Card";

const Body = () => {
  return (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <h2>Search</h2>
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
