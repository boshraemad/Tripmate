import Input from "../../../components/Input";
import Terms from "./Terms";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function LoginForm() {
  const [userEmail , setUserEmail]=useState("");
  const [password , setPassword]=useState("");

 const onSubmit=(e)=>{
  e.preventDefault();
  console.log(userEmail , password)
 }
  return (
    <form
    action="#"
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={onSubmit}
  >
   <Input type="email" label="useremail" width="col-span-6" state={userEmail} setState={setUserEmail}/>
   <Input type="password" label="password" width="col-span-6" state={password} setState={setPassword}/>
   <Link to="/forgotPassword" className="text-sm col-span-6 font-[500] text-turquoise hover:text-darkturquoise">
      Forgot password?
    </Link>
    <Terms/>
    <Footer register={false}/>
  </form>
  )
}
