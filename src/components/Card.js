import { useContext } from "react";
import { CARD_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const Card = (props) => {
  const { resData } = props;

  const { loggedInUser} = useContext(UserContext)

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="card border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="cardLogo">
        <img
          className="w-full h-48 object-cover"
          src={CARD_URL + cloudinaryImageId}
          alt="food image"
        />
      </div>
      <div className="description p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <h4 className="text-gray-600 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex justify-between items-center text-gray-500">
          <h5>{avgRatingString} ★</h5>
          <h5>{deliveryTime} min</h5>
        </div>
          <h5>User : {loggedInUser} </h5>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  return (props) => {
    <div>
      <label>Promoted</label>
      <Card {...props} />
    </div>;
  };
};

export default Card;
