import { CARD_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div className="my-2 ">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between shadow-md my-4 rounded-lg"
        >
          <div className="my-5 w-5/6 mx-2">
            <h1 className="font-bold">{item.card.info.name}</h1>
            <p>₹ {item.card.info.price / 100}</p>
            <span className="font-light">{item.card.info.description}</span>
          </div>
          <div className="w-1/5 m-2">
            <div className="absolute">
              <button className="bg-white p-2 rounded-lg mx-8">Add +</button>
            </div>
            {item.card.info.imageId ? (
              <img
                className="h-auto rounded-lg"
                src={CARD_URL + item.card.info.imageId}
              />
            ) : (
              "🍌"
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
