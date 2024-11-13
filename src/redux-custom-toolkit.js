import { produce } from "immer";

export function myCreateSlice(sliceData) {
  console.log(sliceData);
  const { initialState, name, reducers } = sliceData;
  const actions = {};
  Object.keys(reducers).forEach((key) => {
    actions[key] = (payload) => {
      return {
        type: `${name}/${key}`,
        payload,
      };
    };
  });

  const reducer = (originalState = initialState, action) => {
    return produce(originalState, (state) => {
      const caseReducer = reducers[action.type.split("/")[1]];
      if (caseReducer) {
        return caseReducer(state, action);
      }
      return state;
    });
  };
  return { actions, reducer };
}
