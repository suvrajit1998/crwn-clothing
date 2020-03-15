import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectcartItem = createSelector(
  [selectCart],
  cart => cart.cardItem
);

export const selectCartHiddne = createSelector(
  [selectCart],
  cart => cart.hiddne
);

export const selectcartItemCount = createSelector([selectcartItem], cardItem =>
  cardItem.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  )
);

export const selectCartTotal = createSelector([selectcartItem], cardItem =>
  cardItem.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
