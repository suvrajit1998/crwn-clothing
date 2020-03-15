import { UserActionType } from "./user.types";

const Initiona_state = {
  currentUser: null
};

const Userreducer = (state = Initiona_state, action) => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.pyaload
      };
    default:
      return state;
  }
};

export default Userreducer;
