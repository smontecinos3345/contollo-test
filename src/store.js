import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

function createAppStore(initialState) {
  const res = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );

  if (process.env.NODE_ENV !== "production") {
    window.store = res;
  }

  return res;
}

export default createAppStore;
