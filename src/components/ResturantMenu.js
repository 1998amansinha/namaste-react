import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/Hooks/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

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

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categoriesMenu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log(categoriesMenu)

  return (
    <div className=" m-4 ">
      {/* Restaurant Name */}
      <h1 className="text-3xl font-bold mb-4 text-center">{text}</h1>

      {/* Restaurant Info */}
      <div className="infoCard bg-gray-100 shadow-md rounded-lg p-6 mb-6 text-center w-1/2 mx-auto">
        <h4 className="text-lg font-semibold mb-2">
          {avgRating} ({totalRatingsString}) | {costForTwoMessage}
        </h4>
        <h4 className="text-md text-gray-700 mb-1">{cuisines.join(", ")}</h4>
        <p className="text-sm text-gray-600">{sla.slaString}</p>
        <p className="text-sm text-gray-600">{feeDetails.message}</p>
      </div>

      {(categoriesMenu.map((category) => <ResturantCategory key={category.card.card.title} data={category.card.card}/>))}
    </div>
  );
};

export default ResturantMenu;
