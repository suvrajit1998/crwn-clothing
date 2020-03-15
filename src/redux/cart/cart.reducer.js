import Cardactiontypes from "./cart.types";
import { addItemToCart, removeItemfrommap } from "./cart.utils";

const INITIAL_STATE = {
  hiddne: true,
  cardItem: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Cardactiontypes.TOGGLE_CART_HIDDNE:
      return {
        ...state,
        hiddne: !state.hiddne
      };
    case Cardactiontypes.ADD_ITEM:
      return {
        ...state,
        cardItem: addItemToCart(state.cardItem, action.payload)
      };
    case Cardactiontypes.REMOVE_ITEM:
      return {
        ...state,
        cardItem: removeItemfrommap(state.cardItem, action.payload)
      };
    case Cardactiontypes.CLEAR_FROM_CHECKOUT:
      return {
        ...state,
        cardItem: state.cardItem.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };
    default:
      return state;
  }
};

export default CartReducer;
