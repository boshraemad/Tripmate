import Input from "../../../components/Input";
import CountriesSelect from "./countriesSelect";
import PhoneNumberInput from "./PhoneInput";
import Terms from "./Terms";
import Footer from "./Footer";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
 const {control , handleSubmit , getValues}=useForm();

  const onSubmit=(data)=>{
    // e.preventDefault();
    // const data={
    //   userName:String(userName),
    //   email:String(userEmail),
    //   phoneNumber:String(phone),
    //   password:String(password),
    //   country:String(country)
    // }

    console.log(data)

   }

  return (
    <form
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={handleSubmit(onSubmit)}
  >
   <Input type="email" label="useremail" width="col-span-6" control={control} name="email"
   rules={{
    required:"please enter your email",
    pattern:{
      value: /^\S+@\S+$/i,
      message: "Invalid email format"
    }
    }}/>
   <Input type="text" label="username" width="col-span-6"control={control} name="userName"
   rules={{
    required:"please enter your user-name",
    }}/>
   <Input type="password" label="password" width="col-span-6" control={control} name="password"
   rules={{
    required:"please enter your password",
    }}/>
   <Input type="password" label="confirm-password" width="col-span-6" control={control} name="confirmPassword"
   rules={{
    required:"please confirm your password",
    validate:(value)=> value === getValues().password || "passwords Dont match"
    }}/>
   <PhoneNumberInput control={control} name="phoneNumber" rules={{
    required:"Phone Number is Required",
    pattern: {
      value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
      message: "Invalid phone number format"
    }
   }}/>
   <CountriesSelect control={control} name="country" rules={{
    required:"Country is Required"
   }}/>
    <Terms/>
    <Footer register={true} isLoading={status === "loading"}/>
  </form>
  )
}
