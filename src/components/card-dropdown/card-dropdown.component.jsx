import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-botton.component'
import CartItem from '../cart-item/cart-item.component'
import { selectcartItem } from '../../redux/cart/cart.selector'
import { togglecardhiddne } from '../../redux/cart/cart.action'

import './card-dropdown.style.scss'

const CardDropdown = ({ cardItem, history, dispatch }) => (
  <div className="card-dropdown">
    <div className="card-item">
      {cardItem.length ? (
        cardItem.map(cardItems => (
          <CartItem key={cardItems.id} item={cardItems} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout')
        dispatch(togglecardhiddne())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cardItem: selectcartItem
})

export default withRouter(connect(mapStateToProps)(CardDropdown))
