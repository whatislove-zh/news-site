import { createSlice } from "@reduxjs/toolkit";
import { profileType } from "../../../types/types";

const items = localStorage.getItem("user");
const initialState = () => {
  if (items) {
    return JSON.parse(items) as profileType;
  } else {
    return {
      login: "",
      password: "",
      isSignIn: false,
    } as profileType;
  }
};

const profileSlice = createSlice({
  name: "@@profile",
  initialState,
  reducers: {
    loginUser: (_, action) => ({ ...action.payload, isSignIn: true }),
    logoutUser: () => ({ login: "", password: "", isSignIn: false }),
  },
});

export const { loginUser, logoutUser } = profileSlice.actions;

export const profileReduser = profileSlice.reducer;
