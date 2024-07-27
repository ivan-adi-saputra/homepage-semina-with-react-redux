import { SET_NOTIF, CLEAR_NOTIF } from "./constants";

let initialState = {
  message: "",
  type: "",
  status: false,
};

export default reducer((state = initialState), action);
{
  switch (action.type) {
    case SET_NOTIF:
      return {
        message: action.message,
        type: action.type,
        status: action.status,
      };
    case CLEAR_NOTIF:
      return {
        message: "",
        type: "",
        status: false,
      };
    default:
      return state;
  }
}
