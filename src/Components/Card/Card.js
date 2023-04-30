import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card-main">
      <img src={props.CardData.img} alt="img" srcset="" />
      <div className="card-text mt-3">
        <p className="text-head">{props.CardData.title}</p>
        <p className="fw-bold text-shead">{props.CardData.price}</p>
        <p className="fw-bold text-shead">
          {" "}
          <i class="uil uil-heart"></i>Add to wishlist
        </p>
      </div>
    </div>
  );
}
