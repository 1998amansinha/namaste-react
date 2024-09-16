import { CARD_URL } from "../utils/constant";

const Card = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla: { deliveryTime },
  } = resData?.info;
  
  return (
    <div className="card">
      <div className="cardLogo">
        <img src={CARD_URL + cloudinaryImageId} alt="food image" />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRatingString} stars</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default Card;
