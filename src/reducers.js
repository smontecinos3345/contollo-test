import { combineReducers } from "redux";
import jobs from "./jobs/reducers";
import user from "./users/reducers";
export default combineReducers({
  jobs,
  user,
});
