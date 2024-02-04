import { useEffect, useState } from "react";
import { useParams   } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  console.log("res id = ", resId);
  const fakeId = 229;

  useEffect(() => {
    fethMenu();
  }, []);

  const fethMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId);
    const resMenuData = await data.json();
    setResInfo(resMenuData?.data);
    console.log(resMenuData);
  };

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
