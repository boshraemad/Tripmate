import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function ProtectedRoute({children}) {
    const navigate=useNavigate();
    const user = useSelector((state)=>state.user.user);

    useEffect(()=>{
        if(user === null){
            navigate("/login");
        }
    },[user , navigate]);

  return (
    {children}
  )
}
