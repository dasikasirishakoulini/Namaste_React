import Shimmer from "./ShimmerComponent";
import { useParams } from "react-router-dom";
import useRestarauntMenu from "../utils/useRestarauntMenu";
import RestarauntCategory from "./RestarauntCategory";
import {useState} from 'react';

const RestarauntMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestarauntMenu(resId);
    const[showIndex, setShowIndex] = useState(0);
   

    // Loading state check
    if (!resInfo) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage, totalRatingString } = resInfo?.cards[2]?.card?.card?.info || {};

    // Check if itemCards exist before filtering categories
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards?.filter(
        (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    // Show shimmer if categories are empty
    if (categories.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines?.join(", ")}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{totalRatingString}</h4>
            <h2>Menu</h2>
            {categories.map((category, index) => (
              // controlled component
                category?.card?.card ? (
                    <RestarauntCategory 
                    key={index} 
                    data={category.card.card} 
                    showItems = {index === showIndex ? true:false}
                    setShowIndex={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
                    />
                ) : null
            ))}
        </div>
    );
};

export default RestarauntMenu;
