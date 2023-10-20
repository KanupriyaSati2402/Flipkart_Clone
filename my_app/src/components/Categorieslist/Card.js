import React from "react";
import "./Card.css";

//general component
// prpos = {image,text} fro multiple we use props
function Card(props) {
    return (
      <div className="single_category">
        <img src={props.image} />
        <p>{props.text}</p>
      </div>
    );
  }
  export default Card;