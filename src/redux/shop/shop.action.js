import shopActiontype from "./shop.type";

import {
  firestore,
  convertCollectionSnapshotTomap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: shopActiontype.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collectionmap => ({
  type: shopActiontype.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionmap
});

export const fetchCollectionFaluir = errorMessage => ({
  type: shopActiontype.FETCH_COLLECTIONS_FALUIR,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionref = firestore.collection("collections");
    dispatch(fetchCollectionStart());

    collectionref 
      .get()
      .then(snapshot => {
        const collectionmap = convertCollectionSnapshotTomap(snapshot);
        dispatch(fetchCollectionSuccess(collectionmap));
      })
      .catch(error => dispatch(fetchCollectionFaluir(error.message)));
  };
};
