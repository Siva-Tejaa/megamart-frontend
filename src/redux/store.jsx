import { configureStore } from "@reduxjs/toolkit";

//Slices
import authReducer from "./features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
