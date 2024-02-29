import {useState, useEffect} from "react";
import { restaurant_list } from "../config";
import RestaurantCard from "./RestaurantCard";
import { ShimmerPostList } from "react-shimmer-effects";

const filterData = (searchText, restaurants) => {
    if(searchText.length === 0){ return restaurants}
    const data = restaurants.filter((restaurant) => restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
    return data;
}

const Body = () => {
    //React uses one way data binding
    //const searchTxt = "what";
    const [searchText, setSearchText] = useState('');
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [allRestaurant, setAllRestaurant] = useState();

    const test = useEffect(() => {
        fetchRestaurant();
        console.log("useEffet")
    }, [])

    async function fetchRestaurant(){
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8856697&lng=75.352283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await response.json();
        console.log(data)
        setAllRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    {console.log("render")}
    return filteredRestaurant.length===0 ? (<ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={30} />)
    :(
        <>
            <div>
                <input type="text" className="search-bar" placeholder="search" value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                    //const data = filterData(searchText, allRestaurant);
                    //setFilteredRestaurant(data);
                }}  />
                

                
                <button type="submit" className="search-btn" 
                onClick={() => {
                    const data = filterData(searchText, allRestaurant);
                    setFilteredRestaurant(data);                    
                }}>Search</button>
            </div>

            

            <div className="restaurant-list">
                { filteredRestaurant.map((restaurant) =>{
                    return <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
                })}
            </div>
        </>
    );
}

export default Body;

