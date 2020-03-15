import { UserActionType } from "./user.types";

export const setcurentuser = user => ({
  type: UserActionType.SET_CURRENT_USER,
  pyaload: user
});
