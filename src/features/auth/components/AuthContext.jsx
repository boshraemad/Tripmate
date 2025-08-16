import { createContext , useContext } from "react"
import { useState } from "react";

const AuthContext = createContext();
export default function AuthProvider({children}) {
    const [accessToken , setAccessToken]=useState(()=>localStorage.getItem("accessToken"));
    const [refreshToken , setRefreshToken]=useState(()=>localStorage.getItem("refreshToken"));

    const logout=()=>{
      setAccessToken(null);
      setRefreshToken(null);
      localStorage.clear();
    }
  return (
    <AuthContext.Provider value={{accessToken , setAccessToken , refreshToken , setRefreshToken , logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
    return useContext(AuthContext);
  }
