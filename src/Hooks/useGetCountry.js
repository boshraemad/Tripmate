import { useEffect , useState } from "react"

export default function useGetCountry() {
    const [data , setData]=useState([]);
    useEffect(()=>{
    async function fetchCountries(){
        try{
            const res=await fetch("https://countriesnow.space/api/v0.1/countries")
            const data=await res.json();
            setData(data.data);
        }catch(error){
            console.log(error);
        }
    }

    fetchCountries();
    },[])
  return data;
}
