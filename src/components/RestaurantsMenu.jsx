import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const ResMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(
    "Item cards from res menu : ",
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("The categories are : ", categories);

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-semibold text-md">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/*Category Accordions */}

      {categories.map((category) => (
        <RestaurantCategory data={category?.card?.card} />
      ))}

      {/* <h3>₹{costForTwo / 100}/-</h3>
      <h4>Menu</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - ₹
            {item?.card?.info?.price
              ? item?.card?.info?.price / 100
              : item?.card?.info?.finalPrice / 100}
            /-
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ResMenu;
