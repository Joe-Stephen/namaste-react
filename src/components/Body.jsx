import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_LIST_URL } from "../utils/constants";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  // const [filteredRes, setFilteredRes] = useState([]);
  // const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const resList = useRestaurantList();
  const listOfRes = resList[0];
  const filteredRes = resList[1];
  // setListOfRes(resList[0]);
  // setFilteredRes(resList[1]);

  useEffect(() => {
    const listOfRes = resList[0];
    const filteredRes = resList[1];
  }, [listOfRes, filteredRes]);

  const onlineStatus = useOnlineStatus();

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
      <div className="filter">
        <input
          type="text"
          name="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const filteredRestaurant = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRes(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button className="filter-btn">Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => {
          return <RestaurantCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
