import React from "react";
import "./Card.css";

const Card = (props) => (
  
  <div className="card">
    <div className="card-header">
      <h4 className="mt-2">{props.title}</h4>
    </div>
    <h5 className="mt-4">Author: {props.author}</h5>
    <p><img src={props.thumbnail} alt="book" className="pr-3 float-left"/>{props.description}</p>
    <span><a className="btn btn-view" href={props.link}>View</a>
    <button className="btn btn-view mr-2" onClick={()=>props.handleDeleteBtn(props.id)}>Delete</button></span>
    
    
  </div>
);

export default Card;
