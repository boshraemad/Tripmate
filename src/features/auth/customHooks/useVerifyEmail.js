import { useMutation } from "@tanstack/react-query"
import { VerifyEmail } from "../../../services/auth.api"
import { showSuccessToast , showErrorToast } from "../../../utils/toast"
import { useNavigate } from "react-router-dom";

export default function useVerifyEmail() {
  const navigate = useNavigate();
  const {isLoading:isVerifying , mutate:verifyUser} = useMutation({
    mutationFn:(data)=>VerifyEmail(data),
    onSuccess:(data)=>{
        showSuccessToast(data.message || "your email has been verified successfully");
        navigate("/login");
    },
    onError:(error)=>{
        showErrorToast( error?.response?.data.errors[0] || "failed to verify your email" );
    }
  })

  return {isVerifying , verifyUser}
}
