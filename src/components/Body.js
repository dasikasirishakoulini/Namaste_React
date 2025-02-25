
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
//import resList from "../utils/mockData";//mockdata not needed
 import { useState, useEffect, useContext} from "react";
import Shimmer from './ShimmerComponent'
import {Link} from 'react-router-dom';
import useOnlineStatus from "../utils/useOnlineStatus";
import Game from "./Game";
import UserContext from "../utils/UserContext";

const Body = () => {
  //first state variable to store original data after Api call
    const [listOfRestaraunts, setlistOfRestaraunts] = useState([]);
    
    //second state variable to show filtered restaraunts 
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);

    const[searchText,setSearchText] = useState([])

   const RestarauntCardPromotedLabel = withPromotedLabel(RestaurantCard);

      const {setUserName,loggedInUser} = useContext(UserContext);

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
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
       };

       const onlineStatus = useOnlineStatus();

       if(onlineStatus === false) {
        return <Game />
      }

if(listOfRestaraunts.length === 0){
  return <Shimmer />
}
    
    return (
      <div className="body">
        <div className="filter">
          <div className="search m-4 p-4 flex items-center">
          

            <input
              type="text"
              className="border border-solid border-black"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />

            <button
              className="search px-4 py-2 bg-blue-100 m-4 rounded-lg"
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

          <button
            className="px-4 py-2 bg-blue-100 rounded-lg m-4"
            onClick={() => {
              const filteredList = listOfRestaraunts.filter((res) => { 
                 return (res.info.avgRating > 4)
                });
                setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button> 

          
              <label>UserName</label>
              <input 
              className="border border-black p-1 px-4 m-2" 
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
              />
          
          </div>      
        </div>

        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => (
           <Link key={restaurant.info.id} to ={"/restaraunts/"+ restaurant.info.id}> 
{restaurant.info.promoted ? (<RestarauntCardPromotedLabel resData={restaurant}  />) : (<RestaurantCard  resData={restaurant} />) }
          </Link>
          ))}
        </div>

      </div>
    );
  };

  export default Body;