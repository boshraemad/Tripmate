import axios from "axios";
import store from "./src/store";
// import { refreshAccessToken } from "./src/features/auth/services/auth.tokens";

const url_base = import.meta.env.VITE_API_URL;
 const api=axios.create({
    baseURL:url_base,
    headers:{
         "Content-Type": "application/json",
         Accept:"*/*"
         }
});

api.interceptors.request.use((config)=>{
    const state=store.getState();
    const accessToken = state.user.token;
    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`
    }
    return config;
})

// api.interceptors.response.use((response)=>response,
// async(error)=>{
//     const originalRequest=error.config;
//     if(error.response.status === 403 && !originalRequest._retry){
//         originalRequest._retry=true;

//         try{
//             await refreshAccessToken();
//             // get new access token from userObject
//             // if(newAccessToken){
//             //     originalRequest.headers.Authorization=`Bearer ${newAccessToken}`;
//             // }
//         }catch(error){
//             //set the access token to null || user Object "please login again => toast"
//             // const state = store.getState();
//             // state.userSlice.token=null;
//             // return Promise.reject(error);
//         }
//     }
// }
// )

export default api;