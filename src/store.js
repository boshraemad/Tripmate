import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/auth/services/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
