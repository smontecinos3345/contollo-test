import { createBrowserHistory } from "history";

var currentId = 0;

export const history = createBrowserHistory();

history.listen(function () {
  currentId++;
});

export const withSnapshot = (fn) => {
  return () => {
    const snapshot = currentId;
    return function () {
      if (currentId === snapshot) {
        fn();
      }
    };
  };
};

export const goBack = withSnapshot(() => history.goBack());
export const goForward = withSnapshot(() => history.goForward());
