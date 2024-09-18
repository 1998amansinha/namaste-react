import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";

const ResturantMenu = () => {
  const { resId } = useParams();

  const resInfo = useResturantMenu(resId);

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
    <div className="resturantMenu m-4">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold mb-4">{text}</h1>

      {/* Restaurant Info */}
      <div className="infoCard bg-white shadow-md rounded-lg p-6 mb-6">
        <h4 className="text-lg font-semibold mb-2">
          {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </h4>
        <h4 className="text-md text-gray-700 mb-1">{cuisines.join(", ")}</h4>
        <p className="text-sm text-gray-600">{sla.slaString}</p>
        <p className="text-sm text-gray-600">{feeDetails.message}</p>
      </div>

      {/* Menu Items */}
      <div className="menuContainer">
        <ul className="space-y-4">
          {itemCards.map((item) => (
            <li
              key={item.card.info.id}
              className="p-4 bg-white shadow-md rounded-lg flex flex-col"
            >
              <h5 className="text-xs bg-red-500 text-white px-2 py-1 inline-block mb-2 rounded">
                {item.card.info.ribbon.text}
              </h5>
              <h3 className="text-xl font-bold mb-2">{item.card.info.name}</h3>
              <h4 className="text-lg font-semibold mb-1">
                Rs {item.card.info.price / 100}
              </h4>
              <h5 className="text-sm text-gray-600 mb-2">
                {item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCount} reviews)
              </h5>
              <p className="text-sm text-gray-700">
                {item.card.info.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
