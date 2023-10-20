import React from "react";
import "./Pcard.css";

function Pcard(props){
    return(
<div className="P_card">
<img src={props.image}/>
<p>{props.title}</p>
<p>{props.price}</p>

</div>
    );
}

export default Pcard;