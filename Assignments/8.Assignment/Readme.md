- What is a Microservice?
    - *When a single project is divied and implimented into multiple parts in a independant system*
- What is Monolith architecture?
    - *When all the features of a project implemented together in single system is known as Monolith architecture*
- What is the difference between Monolith and Microservice?
    
- Why do we need a useEffect Hook?
    
- What is Optional Chaining?
- What is Shimmer UI?
- What is the difference between JS expression and JS statement
- What is Conditional Rendering, explain with a code example
    Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

    ```javascript
    //Here if filterRestaurant is empty then we will render loding UI else will render restaurant
    return filteredRestaurant.length===0 ? (<ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />):(
        <>
            <div className="restaurant-list">
                { filteredRestaurant.map((restaurant) =>{
                    return <RestaurantCard  {...restaurant.info} key={restaurant.info.id}/>
                })}
            </div>
        </>
    );
    ```
- What is CORS?
- What is async and await?
- What is the use of `const json = await data.json();` in getRestaurants()
