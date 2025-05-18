import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/localStorageUtils";
import { getJWTTokenDecodedUserRole } from "../../utils/utils";

const initialState = {
  user: getItem("user") || null,
  userRole: getJWTTokenDecodedUserRole(getItem("accessToken")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, role } = action.payload;
      state.user = user;
      state.userRole = role;
    },
    logout: (state) => {
      state.user = null;
      state.userRole = null;
      console.log("userlogged out successfully");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
