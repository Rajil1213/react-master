import { createSlice } from "@reduxjs/toolkit";

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

export const authActions = authSlice.actions;
export default authSlice;
