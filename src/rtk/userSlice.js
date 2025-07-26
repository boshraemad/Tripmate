import { createSlice } from '@reduxjs/toolkit';

const initialState={
    userName:"",
    userEmail:"",
    userId:"",
    accessToken:null
}

 const userSlice=createSlice({
    name:'userSlice',
    initialState,
    reducer:{

    }
})

export default userSlice.reducer;