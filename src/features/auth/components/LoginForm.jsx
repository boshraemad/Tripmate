import Input from "../../../components/Input";
import Terms from "./Terms";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form
    action="#"
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
   <Input type="email" label="useremail" width="col-span-6"/>
   <Input type="password" label="password" width="col-span-6"/>
   <Link to="/forgotPassword" className="text-sm col-span-6 font-[500] text-turquoise hover:text-darkturquoise">
      Forgot password?
    </Link>
    <Terms/>
    <Footer register={false}/>
  </form>
  )
}
