import { useContext } from 'react';
import {LOGO_URL} from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, cloudinaryImageId } =
      resData?.info;

      const {loggedInUser} = useContext(UserContext);
    return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img
          className= "rounded-lg"
          src={
            LOGO_URL +
            cloudinaryImageId
          }
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}*</h4>
        <h4>{sla.slaString}</h4>
        <h4>User:{loggedInUser}</h4>
      </div>
    );
  };

//Higher order component
// input-Restarauntcard(Component) output - Restaraunt card with Promoted Label

 export const withPromotedLabel = (RestarauntCard) =>{
  return(props) =>{

    return (
      <div>
        <label>Promoted</label>
        <RestarauntCard {...props}/>
      </div>
    )
  }
}

  export default RestaurantCard;