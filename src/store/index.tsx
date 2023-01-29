import { createStore, Reducer } from "redux";

type counterState = {
  counter: number;
};

type counterActions = {
  type: "INCREMENT" | "DECREMENT" | "";
};

const counterReducer: Reducer<counterState, counterActions> = (
  state: counterState = { counter: 0 },
  action: counterActions
) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
