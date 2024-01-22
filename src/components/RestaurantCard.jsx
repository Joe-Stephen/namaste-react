import {CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={
            CDN_URL+resData.info.cloudinaryImageId
          }
          alt="res-logo"
        />
        <h3 className="res-name">{name}</h3>
        <h4 className="res-cuisine">{cuisines.join(', ')}</h4>
        <h4 className="res-rating">{avgRating}</h4>
        <h4 className="res-price">{costForTwo}</h4>
        <h4 className="res-delivery-time">{resData.info.sla.deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;