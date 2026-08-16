import { LOGO_URL } from "../utils/contants";
  const Header = () =>{
    return(
    <div className="header">
         <div className="logocontainer">
            <img className ="logo" 
            src={LOGO_URL} alt="logo" />
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


export default Header;