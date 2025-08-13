import Input from "../../../components/Input";
import Terms from "./Terms";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useLogin from "../customHooks/useLogin";

export default function LoginForm() {
const {control , handleSubmit} = useForm();
const {isLoading , loginUser}=useLogin();
 const onSubmit=(data)=>{
  if(!data) return;
  loginUser(data);
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
    <Footer register={false} isLoading={isLoading}/>
  </form>
  )
}
