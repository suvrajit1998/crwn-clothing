import React from "react";
import { connect } from "react-redux";
import { togglecardhiddne } from "../../redux/cart/cart.action";
import { selectcartItemCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

import { ReactComponent as Shoppinglogo } from "../../assets/11.2 shopping-bag.svg.svg";

import "./cart-icon.style.scss";

const CartIcon = ({ togglecardhiddne, itemCount }) => (
  <div className="cart-icon" onClick={togglecardhiddne}>
    <Shoppinglogo className="shopping-logo" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const dispatchToProps = dispatch => ({
  togglecardhiddne: () => dispatch(togglecardhiddne())
});

const mapStatetoProps = createStructuredSelector({
  itemCount: selectcartItemCount
});

export default connect(mapStatetoProps, dispatchToProps)(CartIcon);
