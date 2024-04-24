import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-1 w-[200px] bg-yellow-200 hover:bg-yellow-300">
      <img
        className="res-logo p-1 rounded-lg"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="res-name font-bold py-4 text-lg">{name}</h3>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">{avgRating}</h4>
      <h4 className="res-price">{costForTwo}</h4>
      <h4 className="res-delivery-time">
        {resData.info.sla.deliveryTime} minutes
      </h4>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
