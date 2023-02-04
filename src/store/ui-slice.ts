import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UIState {
  cartIsVisible: boolean;
  notification: {
    status: "error" | "success" | "pending" | "";
    message: string;
    title: string;
  };
}

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: {
      status: "",
      message: "",
      title: "",
    } as UIState["notification"],
  },
  reducers: {
    toggle(state: UIState) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(
      state: UIState,
      action: PayloadAction<{
        status: UIState["notification"]["status"];
        message: string;
        title: string;
      }>
    ) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export default uiSlice;
export const uiActions = uiSlice.actions;
