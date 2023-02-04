import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  cartIsVisible: boolean;
}

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state: UIState) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
