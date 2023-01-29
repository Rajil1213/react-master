import { createStore, Reducer } from "redux";

export type counterState = {
  counter: number;
  showCounter: boolean;
};

const initState: counterState = {
  counter: 0,
  showCounter: true,
};

export type counterActions =
  | {
      type: "INCREMENT" | "DECREMENT" | "";
      amount: number;
    }
  | {
      type: "TOGGLE";
    };

const counterReducer: Reducer<counterState, counterActions> = (
  state: counterState = initState,
  action: counterActions
) => {
  if (action.type === "INCREMENT") {
    return { ...state, counter: state.counter + action.amount };
  }
  if (action.type === "DECREMENT") {
    return { ...state, counter: state.counter - action.amount };
  }
  if (action.type === "TOGGLE") {
    return { ...state, showCounter: !state.showCounter };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
