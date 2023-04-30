import React from 'react'

export const Item = (props) => {
  return (
    <>
    <div className="items-info">
              <div className="product-img">
                <img src="./assets/Banner.png" alt="shh"></img>
              </div>
              <div className="title">
                <h2>{props.title}</h2>
                <p>black color</p>
              </div>

              <div className="add-minus-quantity">
                <i className="fas fa-minus minus"></i>
                <input type="text" placeholder="2" />
                <i className="fas fa-plus add"></i>
              </div>
              <div className="price">
                <h3>2000$</h3>
              </div>

              <div className="remove-item">
                <i className="fas fa-trash-alt  remove"></i>
              </div>
            </div>
            <hr/>

    </>
  )
}
