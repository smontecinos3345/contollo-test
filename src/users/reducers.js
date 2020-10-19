import { makeReducer } from "../shared/utils";
import { USER_REQUEST, USER_REQUEST_FAILED, LOAD_USER_DATA } from "./actions";

export const initialState = {
  loading: true,
  data: [],
  error: null
};

export function userRetrieved(state, { data }) {
  return { ...state, data, loading: false, error: null };
}

export function userRequestFailed(state, { error }) {
  return { ...state, error, data: [], loading: false };
}

export function userRequest(state) {
  return { ...state, loading: true };
}

export const actionHandlers = {
  [USER_REQUEST]: userRequest,
  [USER_REQUEST_FAILED]: userRequestFailed,
  [LOAD_USER_DATA]: userRetrieved,
}

export default makeReducer(initialState, actionHandlers);
