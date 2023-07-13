import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
  },
  reducers: {
    getUser: (state) => {
      state.user = { name: "faiz" };
      state.isAuthenticated = true;
    },
  },
});


// Action creators are generated for each case reducer function
export const { getUser } = authSlice.actions

export default authSlice.reducer