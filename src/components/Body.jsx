import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST_URL } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";

const Body = () => {
  const [filteredRes, setFilteredRes] = useState([]);
  // const [listOfRes, setListOfRes] = useState([]);
  // const [onlineStatus, setOnlineStatus] = useState(null);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const resList = useRestaurantList();
  const listOfRes = resList[0];
  // const filteredRes = resList[1];
  // setOnlineStatus(useOnlineStatus());
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    setFilteredRes(resList[1]);
  }, [onlineStatus, listOfRes, filteredRes]);

  if (!onlineStatus) {
    return (
      <>
        <h1>You are offline! Please check your internet connection.</h1>
      </>
    );
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input
            type="text"
            name="search"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 py-.5 bg-green-500 m-4 border border-solid border-black rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRestaurant);
            }}
          >
            Search
          </button>
          <button className="px-2 py-.5 bg-yellow-500 m-4 border border-solid border-black rounded-md">
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link to={"/resMenu/" +res.info.id} key={res.info.id}>
            {res.info.avgRating >= 4.4 ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

{
  /* <WithPromotedLabel resData={res} /> */
}

export default Body;
