import api from "../../axios.instance";

export async function getCountries(){
    const res = await api.get("/countries");
    return res.data.data;
}