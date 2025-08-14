import api from "../../axios.instance";

export async function login(data){
        const res = await api.post("/Account/login" , data);
        return res.data;
}

export async function register(data){
        const res = await api.post("/Account/register" , data);
        return res.data;
}

export async function VerifyEmail(data){
    const res = await api.post("/Account/verifyEmail" , data);
    return res.data;
}

export async function forgotPassword(data){
    const res = await api.post("/Account/ForgotPassword" , data);
    return res.data;
}