import React from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 * -Logo
 * -Nav Items
 * 
 * Body
 * -Search bar
 * -Restaurant list
 * 
 * Footer
 * -Links
 * -Copyright
 * -Address
 * -Contacts
 * 
*/

const Header = () =>{
    return(
    <div className="header">
         <div className="logocontainer">
            <img className ="logo" src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
    </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img className="restaurant-image" src="https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=" alt="restaurant" />
            <h3>Meghana Foods</h3>
            <h4>Cuisine</h4>
            <h4>Rating</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search for restaurants" />
                <button>Search</button>
            </div>
            <div className="restaurant-list">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}




const AppLayout = () => {
    return (
        
        <div className="applayout">   
       <Header />
       <Body />
       
        
        
        </div>
       

    )
}














const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);