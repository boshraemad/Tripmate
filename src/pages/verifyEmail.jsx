import OtpInput from 'react-otp-input';
import { useState , useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import useVerifyEmail from '../features/auth/customHooks/useVerifyEmail';
import Spinner from "../components/Spinner";

export default function VerifyEmail() {
    const location = useLocation();
    const { email } = location.state || {};
    const [otp , setOtp]=useState("");
    const {isVerifying , verifyUser} = useVerifyEmail();

   useEffect(()=>{
     if(otp.length !== 6) return;
     const data={
        email:email,
        verificationCode:otp
     }
     verifyUser(data)
   } , [otp , email , verifyUser])

  return (
        <div className="flex flex-col items-center gap-4 mt-[100px] md:p-10 p-5 md:w-[700px] w-[300px] mx-auto border-sunset border-2 md:rounded-full rounded-xl bg-darkslate">
        <h1 className="font-bold md:text-2xl text-lg text-white">Verify your Email</h1>
        <p className="text-turquoise text-sm font-bold">Enter the code sent to your email</p>
        <form>
            {
                isVerifying? <Spinner/> :
                <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>{" "}</span>}
                renderInput={(props) => <input {...props} />}
                containerStyle="flex justify-center gap-2 md:gap-3 mb-6 w-[100%]"
                inputStyle={`
                   md:!w-11 md:!h-11  !w-7 !h-7
                  text-center text-xl md:text-2xl font-medium
                  bg-white
                  border-2 border-gray-300
                  rounded-lg focus:outline-none
                  focus:border-sunset focus:ring-1 focus:ring-sunset
                  transition-all duration-200
                  appearance-none
                `}
              />
            }
        </form>
    </div>
  )
}
