export const LOAD_USER_DATA = "LOAD_USER_DATA";
export const USER_REQUEST = "USER_REQUEST";
export const userRequest = () => ({ type: USER_REQUEST });
export const USER_REQUEST_FAILED = "USER_REQUEST_FAILED";
export const userRequestError = (err) => ({ type: USER_REQUEST_FAILED, error: err});
export const loadUserData = (data) => ({ type: LOAD_USER_DATA, data});
