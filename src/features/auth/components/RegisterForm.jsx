import Input from "../../../components/Input";
import CountriesSelect from "./countriesSelect";
import Terms from "./Terms";
import Footer from "./Footer";

export default function RegisterForm() {
  return (
    <form
    action="#"
    className="mt-8 grid grid-cols-6 gap-6"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
   <Input type="text" label="username"/>
   <Input type="email" label="useremail"/>
   <Input type="password" label="password"/>
   <CountriesSelect/>
    <Terms/>
    <Footer register={true}/>
  </form>
  )
}
