import { useMutation } from "@tanstack/react-query"
import { resetPassword } from "../../../services/auth.api"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"
import { useNavigate } from "react-router-dom";

export default function useResetPassword() {
  const navigate = useNavigate();
  const {isLoading , mutate:userResetPassword} = useMutation({
    mutationFn:(data)=>resetPassword(data),
    onSuccess:(data)=>{
        showSuccessToast(data.message || "password has been reset successfully");
        navigate("/login")
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "couldnt reset password" );
    }
  })

  return {isLoading , userResetPassword}
}
