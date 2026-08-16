import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";






const Body = () =>{

    const [ListofRestaurants] = useState([
        {
            info : {
            id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "y0oufs8f1a1xula0ozqa",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
     
        deliveryTime: 37
            },
            
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "Fulwara Chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4.8,
      
        deliveryTime: 41
      
    
  },

  
    info: {
      id: "611642",
      name: "Biriyani Hut",
      cloudinaryImageId: "y0oufs8f1a1xula0ozqa",
      locality: "Scheme Road",
      areaName: "AMC Road",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "Chinese", "Beverages"],
      avgRating: 4.3,
      deliveryTime: 27
       
      
    
  },

  
    info: {
      id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/a1e023e4-bdf3-4bcb-b4d9-2498ba52528e_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Parasia Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      
        deliveryTime: 50
      
    
  },

  
    info: {
      id: "630193",
      name: "Champaran Handi Restaurant",
      cloudinaryImageId: "xph0vf5pvbxjf8xchwjk",
      locality: "Sinchai Colony",
      areaName: "Nagpur Road",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 4.3,
      
        deliveryTime: 43
      
    
  },

  
    info: {
      id: "618037",
      name: "Jai Ganesh Bhojnalaya",
      cloudinaryImageId: "yzgqriufpzmloogcn2vl",
      locality: "Railway Colony",
      areaName: "Bus Stand",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Chinese"
      ],
      avgRating: 4.1,
    
        deliveryTime: 42
     
    
  },

  
    info: {
      id: "151648",
      name: "Mr. Gurung Momo & Chinese Corner",
      cloudinaryImageId: "h7oibtpm7kqks8cqz3gh",
      locality: "Teacher's Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹150 for two",
      cuisines: ["Momos", "Chinese", "Fast Food"],
      avgRating: 4.3,
      
        deliveryTime: 42
      
    
  },

  
    info: {
      id: "615927",
      name: "Roof 5",
      cloudinaryImageId: "glepanv4xjfnhsbieam1",
      locality: "Adarsh Nagar Colony",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      avgRating: 4.2,
      
        deliveryTime: 54
      
    
  },

  
    info: {
      id: "184424",
      name: "Sab Ghar Tak Foods",
      cloudinaryImageId: "ryzswg44bt7thqzkuaj4",
      locality: "Sanchar Colony",
      areaName: "Parasia Road",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      avgRating: 4.1,
     
        deliveryTime: 46
      
    
  },

  
    info: {
      id: "658210",
      name: "The Fusion Lounge",
      cloudinaryImageId: "fa4944f0cfdcbca2bec1f3ab8e3db3f7",
      locality: "Triloki Nagar",
      areaName: "Railway Station",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
      ],
      avgRating: 4.2,
      
        deliveryTime: 45
      
    
  },

  
    info: {
      id: "150591",
      name: "Satkar Restaurant",
      cloudinaryImageId: "rvxp5xbniat84r6efku2",
      locality: "Sinchai Colony",
      areaName: "Satkar Chowk",
      costForTwo: "₹250 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Indian",
        "Salads",
        "Desserts"
      ],
      avgRating: 4.4,
      
        deliveryTime: 44
      
    },
  

  
    info: {
      id: "385824",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG",
      locality: "Sinchai Colony",
      areaName: "Mohan Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Waffle",
        "Desserts",
        "Ice Cream",
        "Beverages"
      ],
      avgRating: 4.7,
     
        deliveryTime: 50
      
    }
  
    },
       
  

 
   ]);
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>
            <div className="filter-btn" onClick ={() => {
                const filteredList = ListofRestaurants.filter(
                    (res) => res.info.avgRating > 4.0
                );
                setListofRestaurants(filteredList);
            }}>
                Top Rated Restaurants
            </div>  
                
            <div className="restaurant-list">

              {ListofRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} ListofRestaurants={restaurant} />
              ))}

                {/* <RestaurantCard resData={resList[2]} />
                {/* <RestaurantCard name="KFC" cuisines={['Fast Food']} rating={4.0} deliveryTime={25} />
                <RestaurantCard name="Burger King" cuisines={['Fast Food']} rating={4.2} deliveryTime={30} />
                <RestaurantCard name="Pizza Hut" cuisines={['Italian']} rating={4.1} deliveryTime={35} />
                <RestaurantCard name="Subway" cuisines={['Sandwiches']} rating={4.0} deliveryTime={25} />
                <RestaurantCard name="Domino's" cuisines={['Italian']} rating={4.3} deliveryTime={38} />
                <RestaurantCard name="Starbucks" cuisines={['Cafe']} rating={4.5} deliveryTime={20} />
                <RestaurantCard name="Dunkin'" cuisines={['Cafe']} rating={4.2} deliveryTime={15} />
                <RestaurantCard name="McDonald's" cuisines={['Fast Food']} rating={4.1} deliveryTime={25} />
                <RestaurantCard name="Taco Bell" cuisines={['Mexican']} rating={4.0} deliveryTime={30} />
                <RestaurantCard name="Panda Express" cuisines={['Chinese']} rating={4.2} deliveryTime={35} />
                <RestaurantCard name="Jimmy John's" cuisines={['Sandwiches']} rating={4.3} deliveryTime={20} />
                <RestaurantCard name="In-N-Out Burger" cuisines={['Fast Food']} rating={4.2} deliveryTime={25} />
                <RestaurantCard name="Panera Bread" cuisines={['Sandwiches']} rating={4.1} deliveryTime={20} />
                <RestaurantCard name="Chipotle" cuisines={['Mexican']} rating={4.0} deliveryTime={30} />
                <RestaurantCard name="Shake Shack" cuisines={['Fast Food']} rating={4.3} deliveryTime={25} /> */}
                 
            </div>
        </div>
    )
}
export default Body;