import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  let newList = [
    {
      info:{
    "id": "375041",
    "name": "Andhra Gunpowder",
    "cloudinaryImageId": "byilgyrcfz690ryoasww",
    "locality": "6th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 3.8,
    "avgRatingString": "4.4",
    "sla": {
      "deliveryTime": 21,
    },
  }},
  {
    info:{
    "id": "375042",
    "name": "KFC",
    "cloudinaryImageId": "byilgyrcfz690ryoasww",
    "locality": "6th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 4.0,
    "avgRatingString": "4.4",
    "sla": {
      "deliveryTime": 21,
    },
  }},
  {
    info:{
    "id": "375044",
    "name": "MCD",
    "cloudinaryImageId": "byilgyrcfz690ryoasww",
    "locality": "6th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 4.5,
    "avgRatingString": "4.4",
    "sla": {
      "deliveryTime": 21,
    },
  }},
  ]
  const [listOfRes, setListOfRes] = useState(newList);

resList.filter((res)=>res.info.avgRating>4);
console.log(newList);
  const showTopRated = ()=>{
    setListOfRes(resList.filter((res)=>res.info.avgRating>4.5))
  }
    return (
      <div className="body">
        <div className="filter">
            <button onClick={showTopRated} className="filter-btn">Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {
            listOfRes.map((res)=>{
              return <RestaurantCard key={res.info.id} resData={res}/>
            })
          }
        </div>
      </div>
  
    );
  };

  export default Body;