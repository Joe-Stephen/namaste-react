import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
