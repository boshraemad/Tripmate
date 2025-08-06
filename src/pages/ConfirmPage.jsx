// import { useParams , useNavigation } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "../components/Spinner"
// import confirmemailfunction

export default function ConfirmPage() {
    // const {accessToken} = useParams();
    // const navigate = useNavigate();

    useEffect(()=>{

        // call confirm email function and pass accessToken 
        //navigate to login page once email confirmed
        //show success toast

    },[])
  return (
    <div className=" w-full h-screen flex items-center justify-center bg-darkslate">
          <div className="md:p-10 px-4 py-6 bg-turquoise rounded-lg flex flex-col items-center gap-6">
            <p className="font-semibold text-white md:text-xl sm:text-lg text-md">Wait few seconds to Confirm your email</p>
            <Spinner/>
          </div>
    </div>
  )
}
