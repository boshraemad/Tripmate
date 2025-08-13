import axios from "axios";

const url_base = import.meta.env.VITE_API_URL;
 const api=axios.create({
    baseURL:url_base,
    headers:{
         "Content-Type": "application/json",
         Accept:"*/*"
         }
});


export default api;