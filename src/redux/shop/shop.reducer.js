import shopActiontype from "./shop.type";

const INITIAL_STATE = {
  collection: null,
  isFetching: false,
  errorMessage: undefined
};

const shopreducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActiontype.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case shopActiontype.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collection: action.payload
      };
    case shopActiontype.FETCH_COLLECTIONS_FALUIR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopreducer;
