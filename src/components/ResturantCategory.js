import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  // console.log(data);

  const [showItems, setShowItems] = useState(false);

  const handleOnClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="flex justify-center cursor-pointer">
      <div className=" bg-gray-200 m-5 p-3  w-6/12 rounded-lg shadow-lg shadow-slate-400"  >
        <div className="flex justify-between" onClick={handleOnClick}>
          <h2 className="font-bold">
            {data.title} ({data.itemCards.length})
          </h2>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;
