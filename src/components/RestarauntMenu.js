
import Shimmer from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";

const RestarauntMenu = () =>{
    const{resId} = useParams();
    const resInfo = useRestarauntMenu(resId);



if (!resInfo){
    return <p><Shimmer /></p>
}


const {name,cuisines,costForTwoMessage,totalRatingString} = resInfo?.cards[2]?.card?.card?.info;
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
console.log(itemCards);

if (!itemCards) {
    return <p><Shimmer /></p>;
  }
    return(
        <div className ="menu">
            <h1>{name}</h1>
            <h2>{cuisines}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{totalRatingString}</h4>
            <h2>Menu</h2>
    <ul>
      {itemCards != 0 ? (
        itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - 
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100} Rs
          </li>
        ))
      ) : (
        <p>No items available</p>
      )}
    </ul>
  
        </div>
    )
}

export default RestarauntMenu;