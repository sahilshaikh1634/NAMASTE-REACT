import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML(DOM)

// const heading1 = React.createElement("h1", { id: "title", key: "h1"} , "Namaste World!");

// const heading2 = React.createElement("h2", { id: "title", key:"h2"}, "from React");


// JSX => React.createElement => Object => HTML(DOM)

// This is not HTML inside in Javascript but it has HTML like syntax which is used in javascript. 
// 


// React Component 
// - Name of Component start with capital letter. (recommeded)
// - 
// - Functional Component => New
// - Class base Component => OLD

const Title = () => <h1 id="title" key='h1'>Namaste React ..!</h1>

const HeaderComponent = () =>(
        <div id="container">
            <Title/>
            <h1 id="title" key='h2'> Hello It's a React Functional Component..</h1>
            <h2 id="title" key='h3'>Hii</h2>
        </div>
);



const Header = () => {
    return (
        <div className="header">
            <a href="/"><img className="logo" src="https://static.wikia.nocookie.net/logopedia/images/1/1f/Food_Food.png"/></a>
            <div className="nav-item">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

// Config Driven UI : All the UI configuiration will be come from backend or API_DATA
const restaurant_list = [
    {
        "type": "restaurant",
        "info": {
            "resId": 310448,
            "name": "Burger King",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/13de0d13e2ef4676833e405662f2831a_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/8/310078/13de0d13e2ef4676833e405662f2831a_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "20.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.6",
                        "reviewCount": "3,127",
                        "reviewTextSmall": "3,127 Reviews",
                        "subtext": "3,127 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.6",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "17.6K",
                        "reviewTextSmall": "17.6K Reviews",
                        "subtext": "17.6K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹400 for two"
            },
            "cfo": {
                "text": "₹300 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "E-8, Inner Circle, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/burger/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/shake/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for one"
            }
        },
        "order": {
            "deliveryTime": "22 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/burger-king-connaught-place-new-delhi/order",
            "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F310448%3Futm_campaign%3D43f0668118c68ec1dececa09a4a88309%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "1.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d9793718-fb83-4cf0-963a-4382c06c92f9\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"310448\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 4057,
            "name": "Bikanervala",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/chains/1/491/aa50c08ea5ade50a6d1c2d7aca242a1c_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "8,397",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.5",
                        "reviewCount": "502",
                        "reviewTextSmall": "502 Reviews",
                        "subtext": "502 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.5",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "3.9",
                        "reviewCount": "7,895",
                        "reviewTextSmall": "7,895 Reviews",
                        "subtext": "7,895 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "3.9",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹450 for two"
            },
            "cfo": {
                "text": "₹300 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "1st Floor, Rajiv Gandhi Handicraft Bhavan, Baba Kharak Singh Marg, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/fast-food/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/desserts/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for one"
            }
        },
        "order": {
            "deliveryTime": "16 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/ncr/bikanervala-connaught-place-new-delhi/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/bikanervala-connaught-place-new-delhi/order",
            "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F4057%3Futm_campaign%3D43f0668118c68ec1dececa09a4a88309%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "566 m",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d9793718-fb83-4cf0-963a-4382c06c92f9\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"4057\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 300658,
            "name": "Hira Sweets",
            "image": {
                "url": "https://b.zmtcdn.com/data/pictures/8/300658/10d9c268283384fae4f30ce49f5e404e_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https://b.zmtcdn.com/data/pictures/8/300658/10d9c268283384fae4f30ce49f5e404e_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "7,387",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "516",
                        "reviewTextSmall": "516 Reviews",
                        "subtext": "516 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        }
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "6,871",
                        "reviewTextSmall": "6,871 Reviews",
                        "subtext": "6,871 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Reviews",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false
                    }
                }
            },
            "cft": {
                "text": "₹500 for two"
            },
            "cfo": {
                "text": "₹300 for one"
            },
            "locality": {
                "name": "Connaught Place, New Delhi",
                "address": "K 19/21, Connaught Place, New Delhi",
                "localityUrl": "ncr/connaught-place-delhi-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/mithai/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/street-food/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/chinese/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/north-indian/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/pizza/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https://www.zomato.com/ncr/restaurants/south-indian/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/ice-cream/",
                    "name": "Ice Cream"
                },
                {
                    "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https://www.zomato.com/ncr/restaurants/beverages/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "₹300 for one"
            }
        },
        "order": {
            "deliveryTime": "26 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "/ncr/hira-sweets-connaught-place-new-delhi/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "/ncr/hira-sweets-connaught-place-new-delhi/order",
            "clickActionDeeplink": "https://bnc.lt/WJml/XSaHR6pb4cb?deeplink_url=zomato%3A%2F%2Forder%2F300658%3Futm_campaign%3D43f0668118c68ec1dececa09a4a88309%26utm_source%3Dmweb%26utm_medium%3DMwebSearchResCard"
        },
        "distance": "1.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d9793718-fb83-4cf0-963a-4382c06c92f9\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"300658\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "50% OFF up to 100",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": [
            {
                "image": {
                    "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
                    "aspect_ratio": 2.66666666667
                },
                "text": "Follows all Max Safety measures to ensure your food is safe"
            }
        ]
    }
]



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

const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard  {...restaurant_list[0].info}/>
            <RestaurantCard  {...restaurant_list[1].info}/>
            <RestaurantCard  {...restaurant_list[2].info}/>
        </div>
    );
}

const Footer = () => {
    return (
        <h4>Footer</h4>
    );
}

const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
