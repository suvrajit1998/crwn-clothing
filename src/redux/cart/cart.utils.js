export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingcartitem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingcartitem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemfrommap = (cartItems, cartItemtoremove) => {
  const existingcartitem = cartItems.find(
    cartItem => cartItem.id === cartItemtoremove.id
  );

  if (existingcartitem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemtoremove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemtoremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
