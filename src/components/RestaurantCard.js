import {restaurantCardImgURL} from "../config";

const RestaurantCard = ({cloudinaryImageId, name, avgRatingString, cuisines}) => {
    return (
        <div className="card">
            <img src={restaurantCardImgURL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>Average rating: {avgRatingString}</h3>
            <h3>Cuisine: {cuisines.map(cuisines => cuisines).join(", ")}</h3>
        </div>
    );

}

export default RestaurantCard;