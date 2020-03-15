import Cardactiontypes from "./cart.types";

export const togglecardhiddne = () => ({
  type: Cardactiontypes.TOGGLE_CART_HIDDNE
});

export const additem = item => ({
  type: Cardactiontypes.ADD_ITEM,
  payload: item
});

export const clearfromcheckout = item => ({
  type: Cardactiontypes.CLEAR_FROM_CHECKOUT,
  payload: item
});

export const removeItem = item => ({
  type: Cardactiontypes.REMOVE_ITEM,
  payload: item
});
