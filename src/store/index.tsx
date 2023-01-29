import { createStore, Reducer } from "redux";

export type counterState = {
  counter: number;
};

export type counterActions = {
  type: "INCREMENT" | "DECREMENT" | "";
  amount: number;
};

const counterReducer: Reducer<counterState, counterActions> = (
  state: counterState = { counter: 0 },
  action: counterActions
) => {
  if (action.type === "INCREMENT") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "DECREMENT") {
    return { counter: state.counter - action.amount };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
