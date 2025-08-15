import { useAuth } from "../features/auth/components/AuthContext";
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function ProtectedRoute({children}) {
    const navigate=useNavigate();
    const {refreshToken} =useAuth();

    useEffect(()=>{
        if(!refreshToken){
            navigate("/login");
        }
    },[refreshToken , navigate]);

  return (
    <>
      {children}
    </>
  )
}
