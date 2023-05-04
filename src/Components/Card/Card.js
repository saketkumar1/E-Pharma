import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/detail/${props.index}`;
    navigate(path);
  };
  return (
    <div className="card-main">
      <img src={props.CardData.img} alt="img" srcset="" onClick={routeChange} />
      <div className="card-text mt-3">
        <p className="text-head"> {props.CardData.title}</p>
        <p className="fw-bold text-shead">₹ {props.CardData.price}</p>
        <p
          className="fw-bold cart-Button text-center"
          onClick={() => {
            props.addCart(props.CardData);
          }}
        >
          <i class="uil uil-shopping-cart-alt"></i> Add to Cart
        </p>
      </div>
    </div>
  );
}
