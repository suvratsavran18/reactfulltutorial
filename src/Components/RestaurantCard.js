import { CDN_URL } from "../utils/contants"; // named import
// import  CDN_URL  from "../utils/contants"; //

const RestaurantCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo } = resData?.info;
    return(
        <div className="res-card">
            <img 
            className="restaurant-image" 
            src={CDN_URL + cloudinaryImageId}
             alt="restaurant" />
            <h3><a href="#">{name}</a></h3>
            <h4><b>{cuisines.join(", ")}</b></h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;