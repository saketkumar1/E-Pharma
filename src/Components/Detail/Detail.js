import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function Detail(props) {
  const { index } = useParams();
  const [value, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getProduct(Number(index) + 1);
      setIsLoading(false);
   }, 1000);
    
   
  }, []);

  async function getProduct(dv) {
    const response = await fetch("https://fakestoreapi.com/products/" + dv);
    const output = await response.json();
    setData(output);
  }

  const data = {
    img: value.image,
    price: value.price,
    title: value.title,
    quantity: 0,
  };


  const renderpdt = (
    <div className="detail-card">
    <div className="detail-img">
      <img src={value.image} alt="imgg" srcset="" />
    </div>
    <div className="detail-right">
      <h2>{value.title}</h2>
      <p className="detail-price">$ {value.price}</p>
      <p className="detail-desc">{value.description}</p>

      <button
        className="fw-bold btn btn-primary"
        onClick={() => {
          props.addCart(data);
        }}
      >
        <i class="uil uil-shopping-cart-alt"></i> Add to Cart
      </button>
    </div>
  </div>
  );

  return (
    <div className="">
      {isLoading ? <LoadingSpinner /> : renderpdt}
    </div>
  );
}
