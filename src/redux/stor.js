import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import thunk from "redux-thunk";

import logger from "redux-logger";

import rootreducer from "./root-reducer";

const middlewaers = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewaers.push(logger);
}

export const stor = createStore(rootreducer, applyMiddleware(...middlewaers));

export const persistor = persistStore(stor);

export default { stor, persistor };
