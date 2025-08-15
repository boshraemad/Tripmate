import axios from "axios";

const url_base = import.meta.env.VITE_API_URL;
 const api=axios.create({
    baseURL:url_base,
    headers:{
         "Content-Type": "application/json",
         Accept:"*/*",
         withCredentials: true, 
         }
});

api.interceptors.request.use(
   (config) => {
      const accessToken = localStorage.getItem("accessToken")
     if (accessToken) {
       config.headers.Authorization = `Bearer ${accessToken}`;
     }
     return config;
   },
   (error) => {
     return Promise.reject(error);
   }
 );


export default api;