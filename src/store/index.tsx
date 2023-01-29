import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export type counterState = {
  counter: number;
  showCounter: boolean;
};

const initState: counterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action: PayloadAction<{ amount: number }>) {
      state.counter += action.payload.amount;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export type AuthState = {
  isAuthenticated: boolean;
};

const initialAuthState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
