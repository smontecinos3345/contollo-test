import { makeReducer } from "../shared/utils";
import { JOBS_REQUEST, JOBS_REQUEST_FAILED, LOAD_JOBS_DATA } from "./actions";

export const initialState = {
  loading: true,
  data: [],
  error: null
};

export function jobsRetrieved(state, { data }) {
  return { ...state, data, loading: false, error: null };
}

export function jobsRequestFailed(state, { error }) {
  return { ...state, error, data: [], loading: false };
}

export function jobsRequest(state) {
  return { ...state, loading: true };
}

export const actionHandlers = {
  [JOBS_REQUEST]: jobsRequest,
  [JOBS_REQUEST_FAILED]: jobsRequestFailed,
  [LOAD_JOBS_DATA]: jobsRetrieved,
}

export default makeReducer(initialState, actionHandlers);
