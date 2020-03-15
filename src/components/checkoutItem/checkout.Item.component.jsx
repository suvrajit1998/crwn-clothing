import React from 'react'

import { connect } from 'react-redux'

import {
  clearfromcheckout,
  additem,
  removeItem
} from '../../redux/cart/cart.action'

import './checkout.item.style.scss'

const CheckoutItem = ({ cartItem, clearItem, additem, removeItem }) => {
  console.log(cartItem)
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="img" src={imageUrl} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={() => additem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearfromcheckout(item)),
  additem: item => dispatch(additem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
