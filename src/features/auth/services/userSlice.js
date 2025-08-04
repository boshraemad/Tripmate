import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { register as registerUser } from "./auth.api";
import { login as loginUser } from "./auth.api";

export const register = createAsyncThunk(
  "user/register",
  async function (data , {rejectWithValue}) {
    try{
        const response = await registerUser(data);
    return response.data;
    }catch(error){
        return rejectWithValue({
            errors: error.response?.data?.errors[0]
        })
    }
  }
);

export const login = createAsyncThunk("user/login", async function (data , {rejectWithValue}) {
    try{
        const response = await loginUser(data);
        return response.data;
    }catch(error){
        return rejectWithValue({
            errors: error.response?.data?.errors[0]
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
  reducer: {},
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "idle",
        state.registered = action.payload.success === true;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle", 
        state.error = action.payload.errors[0];
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
