import React from "react";

function Card({name,image,instruction}){

    return(
        <div className="card" >
          <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{instruction}</p>
          </div>
        </div>
    )
}

export default Card;