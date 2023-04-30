import React, { useState } from "react";
import "./Cart.css";
import { Item } from "./Item"; 
import {products} from './Product';
const Cart = () => {
    const [item,setItem] =useState(products);
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src="./assets/truck.png" className="arrow-icon" />
          <h3>Continue shopping</h3>
        </div>
        <div className="cart-icon">
          <img src="./assets/truck.png" />
          <p>7</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          you have <spna className="total-items-count">7</spna> items in
          shopping cart
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
               {
                item.map((curItem) =>
                {
                    return <Item key={ curItem.id} {...curItem}/>
                })
               }
               
          </div>
        </div>

        {/* <div className="cat-total">
        <h3>Cart Total : <span>2200s</span></h3>
        <button>checkout</button>
        </div> */}
      </section>
    </>
  );
};

export default Cart;
