import {
  START_FETCHING_EVENT,
  SUCCESS_FETCHING_EVENT,
  ERROR_FETCHING_EVENT,
} from "./constants";

import { getData } from "../../utils/fetchData";
import debounce from "debounce-promise";

let debounceEvent = debounce(getData, 1000);

export function startFetchingEvent() {
  return { type: START_FETCHING_EVENT };
}
export function successFetchingEvent({ event }) {
  return { type: SUCCESS_FETCHING_EVENT, event };
}
export function errorFetchingEvent() {
  return { type: ERROR_FETCHING_EVENT };
}

export function fetchingEvent() {
  return async (dispatch) => {
    dispatch(startFetchingEvent());
    try {
      const res = await debounceEvent("events");
      dispatch(
        successFetchingEvent({
          event: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingEvent());
    }
  };
}
