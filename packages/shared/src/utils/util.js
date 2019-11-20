export const mergeObjWithState = (state, payload) => ({
  ...state,
  [payload.id]: {
    ...state[payload.id],
    ...payload,
  },
});
