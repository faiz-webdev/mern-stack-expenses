import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    getUser: (state, { payload }) => {
      state.user = payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = {};
      state.isAuthenticated = false;
    },
    setUser: (state, {payload}) => {
        state.user = payload.user;
        state.isAuthenticated = true;
      },
  },
});

// Action creators are generated for each case reducer function
export const { getUser, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
