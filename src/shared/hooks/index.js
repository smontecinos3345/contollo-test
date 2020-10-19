import { useDispatch } from "react-redux";
import { useEffect } from "react";

export function useService({
  start,
  effect,
  error
}, fn, deps = []) {
  const dispatch = useDispatch();
  return useEffect(() => {
    dispatch(start());
    Promise
      .resolve(fn())
      .then(({ data }) => dispatch(effect(data)))
      .catch(err => (console.error(err), dispatch(error(err))));
    return () => {

    };
  }, deps);
}
