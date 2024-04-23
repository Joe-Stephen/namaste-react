import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, costForTwo, cloudinaryImageId, cuisines } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);

  return (
    <>
      <h1>{name}</h1>
      <p>{cuisines.join(",")}</p>
      <h3>₹{costForTwo / 100}/-</h3>
      <h4>categories</h4>
      <ul>
        {itemCards.map((item) => (
          <>
            <li key={item.card.info.id}>
              {item?.card?.info?.name} - ₹{item?.card?.info?.price / 100}/-
            </li>
            <hr />
          </>
        ))}
      </ul>
    </>
  );
};

export default ResMenu;
