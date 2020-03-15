import React from "react";

import "./cart-item.style.scss";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <div className="cart-item">
    <img alt="item" src={imageUrl} />
    <div className="image-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} X ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
