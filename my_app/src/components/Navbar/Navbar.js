import { logDOM } from "@testing-library/react";
import React from "react";
import "./Navbar.css";
const Navbar =()=>{
//Elements
// 1 logo
// 2 Input field
// 3 Name
// 4 Item1
// 5 Item2
// 6 Item3

    return(
        <div className="Navbar">
        <div className="Navbar_left">
        <p>Flipkart</p>
        <input className="Navbar_left_input" placeholder="Search for products, brands and more"/>
        </div>

        <div className="Navbar_right">
        <p>Name</p>
        <p>Become a Seller</p>
        <p>More</p>
         <p>Cart</p>
        </div>
        </div>
    );
};

export default Navbar; 