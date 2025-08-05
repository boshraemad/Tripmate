import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register as registerUser } from "./auth.api";
import { login as loginUser } from "./auth.api";
import { showSuccessToast , showErrorToast , showLoadingToast , dismissToast } from "../../../utils/toast";

export const register = createAsyncThunk(
  "user/register",
  async function (data , {rejectWithValue}) {
    const toastId = showLoadingToast("wait few seconds to sign up");
    try{
        const response = await registerUser(data);
        dismissToast(toastId);
        showSuccessToast("registered Successfully");
    return response.data;
    }catch(error){
      dismissToast(toastId);
      showErrorToast( error.response?.data?.errors[0] || "failed to register");
        return rejectWithValue({
            errors: error.response?.data?.errors[0] || "failed to register"
        })
    }
  }
);

export const login = createAsyncThunk("user/login", async function (data , {rejectWithValue}) {
    const toastId = showLoadingToast("wait few seconds to login");
    try{
        const response = await loginUser(data);
        dismissToast(toastId);
        showSuccessToast("logged in successfully");
        return response.data;
    }catch(error){
      dismissToast(toastId);
      showErrorToast(error.response?.data?.errors);
        return rejectWithValue({
            errors: error.response?.data?.errors || "login failed"
        })
    }
});

const initialState = {
  user: null,
  status: "idle",
  error: "",
  registered: false,
  loggedIn:false
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {

  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "idle",
        state.registered = true
        
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle", 
        state.error = action.payload.errors;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle", 
        state.user = action.payload.data;
        state.loggedIn = true
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle", 
        state.error = action.payload.errors;
      }),
});

export default userSlice.reducer;
