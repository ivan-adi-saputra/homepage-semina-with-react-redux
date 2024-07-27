import { SET_NOTIF, CLEAR_NOTIF } from "./constants";

export function setNotif({ message, type, status }) {
  return {
    type: SET_NOTIF,
    message,
    type,
    status,
  };
}

export function clearNotif() {
  return {
    type: CLEAR_NOTIF,
  };
}
