import { useEffect, useState } from "react";
import { RES_LIST_URL } from "./constants";

const useRestaurantList = (resId) => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_URL);
    const json = await data.json();
    console.log("data.json : ", json);
    setListOfRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [listOfRes, filteredRes];
};

export default useRestaurantList;
