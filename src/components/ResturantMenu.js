import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId)

  // Check if resInfo and cards exist before accessing
  if (resInfo === null) {
    return <Shimmer />; // Render loading state until data is fetched
  }
  // console.log(resInfo);
  const { text } = resInfo?.cards[0]?.card?.card;

  const {
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    sla,
    feeDetails,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="resturntMenu">
      <h1>{text}</h1>
      <div className="infoCard">
        <h4>
          {avgRating} ({totalRatingsString}) || {costForTwoMessage}
        </h4>
        <h4>{cuisines.join(", ")}</h4>
        <p>{sla.slaString}</p>
        <p>{feeDetails.message}</p>
      </div>
      <div className="menuContainer">
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <h5>{item.card.info.ribbon.text}</h5>
              <h3>{item.card.info.name}</h3>
              <h4>Rs {item.card.info.price / 100}</h4>
              <h5>
                {item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCount})
              </h5>
              <p>{item.card.info.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
