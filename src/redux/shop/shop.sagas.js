import { takeEvery } from "redux-saga/effects";

import shopActiontype from "./shop.type";

export function* fetchCollectionAsync() {
  yield console.log("I am Fired");
}

export function* fetchCollectionStart() {
  yield takeEvery(shopActiontype.FETCH_COLLECTIONS_START, fetchCollectionAsync);
}
