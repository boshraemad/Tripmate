import { useMutation } from "@tanstack/react-query"
import { forgotPassword } from "../../../services/auth.api"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"
import { useNavigate } from "react-router-dom";

export default function useForgotPassword() {
  const navigate = useNavigate();
  const {isLoading , mutate:userForgotPassword} = useMutation({
    mutationFn:(data)=>forgotPassword(data),
    onSuccess:(data)=>{
        showSuccessToast(data.message || "we sent your password to your email");
        navigate("/reset-password")
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "process failed" );
    }
  })

  return {isLoading , userForgotPassword}
}
