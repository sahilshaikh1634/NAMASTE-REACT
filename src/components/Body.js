import { restaurant_list } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    //React uses one way data binding
    const searchTxt = "KFC";
    return (
        <>
            <div>
                
                <input type="text" className="search-bar" placeholder="search" value={searchTxt}  />
                <button className="search-btn">Search</button>
            </div>
            <div className="restaurant-list">
                { restaurant_list.map((restaurant) =>{
                    return <RestaurantCard  {...restaurant.info} key={restaurant.info.resId}/>
                })}
            </div>
        </>
    );
}

export default Body;

