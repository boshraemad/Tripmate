import api from "../../../../axios.instance";

export async function register(data){
        const res = await api.post("/Account/register" , data)
        return res;
}

export async function login(data){
        const res = await api.post("Account/login" , data)
        return res;
}