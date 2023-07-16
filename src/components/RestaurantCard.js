const RestaurantCard = ({image, name, rating, cuisine}) => {
    return (
        <div className="card">
            <img src={image.url}/>
            <h3>{name}</h3>
            <h3>Average rating: {rating.aggregate_rating}</h3>
            <h3>Cuisine: {cuisine.map(cuisine => cuisine.name).join(", ")}</h3>
        </div>
    );

}

export default RestaurantCard;