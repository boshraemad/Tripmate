import { useMutation } from "@tanstack/react-query"
import { login } from "../../../services/auth.api"
import { useNavigate } from "react-router-dom"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"

export default function useLogin() {
    const navigate=useNavigate();
  const {isLoading:isLogging , mutate:loginUser} = useMutation({
    mutationFn:(data)=>login(data),
    onSuccess:()=>{
        showSuccessToast("user logged in successfully");
        navigate("/");
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "Login failed. Please try again." );
    }
  })

  return {isLogging , loginUser}
}
