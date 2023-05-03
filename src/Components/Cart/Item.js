import React from "react";

export const Item = (props) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={props.data.img} alt="shh"></img>
        </div>
        <div className="title">
          <h2>{props.data.title}</h2>
          <p>black color</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus"             onClick={() => {
              props.decrementQuantity(props.index);
            }}
></i>
          <input type="text" placeholder={props.data.quantity} />
          <i className="fas fa-plus add"   onClick={() => {
              props.incrementQuantity(props.index);
            }}></i>
        </div>
        <div className="price">
          <h3>{ props.data.price * props.data.quantity }
        </h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt  remove" onClick={() =>{props.removeItem();}}></i>
        </div>
      </div>
      <hr />
    </>
  );
};
