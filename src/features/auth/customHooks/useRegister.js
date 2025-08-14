import { useMutation } from "@tanstack/react-query"
import { register } from "../../../services/auth.api"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"
import { useNavigate } from "react-router-dom";

export default function useRegister() {
  const navigate = useNavigate();
  const {isLoading:isRegistering , mutate:registerUser} = useMutation({
    mutationFn:(data)=>register(data),
    onSuccess:(data)=>{
        showSuccessToast(data.message || "check your email to verify your account");
        navigate("/verify" , {
            state:{
                email:data.data
            }
        });
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "Register failed. Please try again." );
    }
  })

  return {isRegistering , registerUser}
}
