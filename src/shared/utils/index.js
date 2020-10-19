export function makeReducer ( initialState, handlers )  {
  return (state = initialState, action) => {
    const type = action.type;
    const handler = handlers[type];
    return handler !== undefined ? handler(state, action) : state;
  }
}
