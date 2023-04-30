import React from "react";
import "./BigCard.css";

export default function BigCard(props) {
  var divImage = props.cardData.img;
  return (
    <>
      <div className="bigCard" style={{backgroundImage: `url(${divImage})`}}>
        {/* <img className="BigCardimg" src={props.cardData.img} alt="jk" srcset="" /> */}
        <div className="cardinfo">
          <p>{props.cardData.price}</p>
          <p>{props.cardData.subhead}</p>
          <h3>{props.cardData.head}</h3>
          <button type="button" class="btn btn-light">Shop Now</button>
        </div>
      </div>
    </>
  );
}
