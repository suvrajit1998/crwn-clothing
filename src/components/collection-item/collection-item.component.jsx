import React from "react";

import CustomButton from "../custom-button/custom-botton.component";
import { connect } from "react-redux";

import { additem } from "../../redux/cart/cart.action";

import "./collection-item.style.scss";

const CollectionItem = ({ item, additem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton className="position" onClick={() => additem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const dispatchToProps = dispatch => ({
  additem: item => dispatch(additem(item))
});

export default connect(null, dispatchToProps)(CollectionItem);
