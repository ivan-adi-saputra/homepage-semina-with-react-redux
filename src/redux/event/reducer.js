import {
  START_FETCHING_EVENT,
  SUCCESS_FETCHING_EVENT,
  ERROR_FETCHING_EVENT,
} from "./constants";

const listStatus = {
  idle: "idle",
  success: "success",
  process: "process",
  error: "error",
};

const initialState = {
  status: listStatus.idle,
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_EVENT:
      return {
        ...state,
        status: listStatus.process,
      };
    case SUCCESS_FETCHING_EVENT:
      return {
        ...state,
        status: listStatus.success,
        data: action.event,
      };
    case ERROR_FETCHING_EVENT:
      return {
        ...state,
        status: listStatus.error,
      };
    default:
      return state;
  }
}
