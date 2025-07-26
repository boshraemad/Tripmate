import { useState } from "react";
import Input from "../../../components/Input";
import CountriesSelect from "./countriesSelect";
import PhoneNumberInput from "./PhoneInput";
import Terms from "./Terms";
import Footer from "./Footer";

export default function RegisterForm() {
  const [userEmail , setUserEmail]=useState("");
  const [userName , setUserName]=useState("");
  const [password , setPassword]=useState("");
  const [phone , setPhone]=useState("");
  const [country,setCountry]=useState("");

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(userEmail , userName , password , phone , country)
   }

  return (
    <form
    action="#"
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={onSubmit}
  >
    <Input type="email" label="useremail" width="col-span-6" state={userEmail} setState={setUserEmail}/>
   <Input type="text" label="username" width="col-span-3" state={userName} setState={setUserName}/>
   <Input type="password" label="password" width="col-span-3" state={password} setState={setPassword}/>
   <PhoneNumberInput state={phone} setState={setPhone}/>
   <CountriesSelect state={country} setState={setCountry}/>
    <Terms/>
    <Footer register={true}/>
  </form>
  )
}
