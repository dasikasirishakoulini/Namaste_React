
import RestaurantCard from "./RestaurantCard";
//import resList from "../utils/mockData";//mockdata not needed
 import { useState, useEffect} from "react";
import Shimmer from './ShimmerComponent'
import {Link} from 'react-router-dom';

const Body = () => {
  //first state variable to store original data after Api call
    const [listOfRestaraunts, setlistOfRestaraunts] = useState([]);
    
    //second state variable to show filtered restaraunts 
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const[searchText,setSearchText] = useState([])

    useEffect(() => {
        fetchData();
       }, []);
    
       // fetching data from live swiggy api
    const fetchData = async () => {
        const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setlistOfRestaraunts(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       };

if(listOfRestaraunts.length === 0){
  return <Shimmer />
}
    
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="searchBtn"
              onClick={() => {
                // filter the Restaurant and update the UI
                const filteredRestaurant = listOfRestaraunts.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setFilteredRestaurants(filteredRestaurant);
              }}
            >
              Search
            </button>

          </div>

          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaraunts.filter((res) => res.info.avgRating > 4);
              setlistOfRestaraunts(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>

        </div>
        <div className="res-container">
          {filteredRestaurants.map((restaurant) => (
           <Link key={restaurant.info.id} to ={"/restaraunts/"+ restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;