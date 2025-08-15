import { useMutation } from "@tanstack/react-query"
import { login } from "../../../services/auth.api"
import { useNavigate } from "react-router-dom"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"
import { useAuth } from "../components/AuthContext"

export default function useLogin() {
    const navigate=useNavigate();
    const {setAccessToken , setRefreshToken} = useAuth();
  const {isLoading:isLogging , mutate:loginUser} = useMutation({
    mutationFn:(data)=>login(data),
    onSuccess:(data)=>{
        showSuccessToast("user logged in successfully");
        setAccessToken(data.data.accessToken)
        setRefreshToken(data.data.refreshToken)
        localStorage.setItem("accessToken" , data.data.accessToken);
        localStorage.setItem("refreshToken" , data.data.refreshToken);
        navigate("/");
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "Login failed. Please try again." );
    }
  })

  return {isLogging , loginUser}
}
