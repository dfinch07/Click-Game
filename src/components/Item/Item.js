import React from "react";
import "./Item.css";

const Item = (props) => (

   <img className="click-item" src={props.image} alt={props.name}/>

);

export default Item;
