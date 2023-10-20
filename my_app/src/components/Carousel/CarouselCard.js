import React from "react";
import "./CarouselCard.css";

function CarouselCard({image}){
    return <img className="carousel_image" src={image}/>;
}
export default CarouselCard;