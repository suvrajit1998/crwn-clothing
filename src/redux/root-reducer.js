import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import Userreducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryreducer from "./directory/directory.reducer";
import shopreducer from "./shop/shop.reducer";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: Userreducer,
  cart: CartReducer,
  directory: directoryreducer,
  shop: shopreducer
});

export default persistReducer(persistconfig, rootReducer);
