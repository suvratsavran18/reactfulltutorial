import React from "react";
import ReactDOM from "react-dom/client";
import Header   from "./Components/Header";
import Body from "./Components/Body";



  




// they both are same but the first one is more readable and the second one is more concise
// these are two ways to pass props to a component
// that is, we can pass props to a component either by using props object or by destructuring the props object
// that's how we make dynamic components in react and we can reuse them as many times as we want with different data
// const RestaurantCard = (name, cuisines, rating, deliveryTime) =>{
//     return(
//         <div className="res-card">
//             <img className="restaurant-image" src="https://as2.ftcdn.net/v2/jpg/12/82/94/69/1000_F_1282946907_d9RZ8uGDYgQfKoZY8fyqt6zPdlQMgmAe.jpg"
//              alt="restaurant" />
//             <h3>{name}</h3>
//             <h4><b>{cuisines.join(", ")}</b></h4>
//             <h4>{rating}</h4>
//             <h4>{deliveryTime} minutes</h4>
//         </div>
//     )
// }





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