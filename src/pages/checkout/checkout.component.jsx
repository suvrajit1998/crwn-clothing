import React from 'react'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectcartItem, selectCartTotal } from '../../redux/cart/cart.selector'

import CheckoutItem from '../../components/checkoutItem/checkout.Item.component'
import StripeButton from '../../components/stripe-button/stripe-button.component'

import './checkout.style.scss'

const Checkout = ({ cardItem, total }) => {
  console.log(cardItem)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantiy</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cardItem.map(cartitem => (
        <CheckoutItem key={cartitem.id} cartItem={cartitem} />
      ))}
      <div className="total">
        <span> TOTAL: ${total} </span>
      </div>
      <div className="test-warning">
        *Plaease use the following test creadit card for payment*
        <br />
        4242 4242 4242 4242 - Exp - 01/20 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cardItem: selectcartItem,
  total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)
