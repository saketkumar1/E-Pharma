import React from "react";
import { useParams } from "react-router-dom";

export default function Detail(props) {
  const { index } = useParams();
  const value = props.CardData[index];
  const img = String(props.CardData[index].img).substring(1);

  return (
    <div className="detail-card">
      <div className="detail-img">
        <img src={img} alt="imgg" srcset="" />
      </div>
      <div className="detail-right">
        <h2>{value.title}</h2>
        <p className="detail-price">₹ {value.price}</p>
        <p className="detail-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          totam quae aperiam magnam minima vitae deserunt? Facere laboriosam
          quidem itaque, inventore fugiat molestiae vel excepturi laudantium, ea
          molestias dolorem corporis.
        </p>

        <button
          className="fw-bold btn btn-primary"
          onClick={() => {
            props.addCart(value);
          }}
        >
          <i class="uil uil-shopping-cart-alt"></i> Add to Cart
        </button>
      </div>
    </div>
  );
}
