import Input from "../../../components/Input";
import Terms from "./Terms";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";
import { useForm } from "react-hook-form";

export default function LoginForm() {
const {control , handleSubmit} = useForm();
 const onSubmit=(data)=>{
  // e.preventDefault();
  // const data = {
  //   email:String(userEmail),
  //   password:String(password)
  // }
  console.log(data);
 }
  return (
    <form
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={handleSubmit(onSubmit)}
  >
    <Input type="email" label="useremail" expand={true} width="col-span-6" control={control} name="email"
   rules={{
    required:"please enter your email",
    pattern:{
      value: /^\S+@\S+$/i,
      message: "Invalid email format"
    }
    }}/>
   <Input type="password" label="password" expand={true} width="col-span-6" control={control} name="password"
   rules={{
    required:"please enter your password",
    }}/>
   <Link to="/forgotPassword" className="text-sm col-span-6 font-[500] text-turquoise hover:text-darkturquoise">
      Forgot password?
    </Link>
    <Terms/>
    {/* {error && <ErrorMessage message={error}/>} */}
    <Footer register={false} isLoading={ status === "loading"}/>
  </form>
  )
}
