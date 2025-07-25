import Input from "../../../components/Input";
import CountriesSelect from "./countriesSelect";
import PhoneNumberInput from "./PhoneInput";
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
    <Input type="email" label="useremail" width="col-span-6"/>
   <Input type="text" label="username" width="col-span-3"/>
   <Input type="password" label="password" width="col-span-3"/>
   <PhoneNumberInput/>
   <CountriesSelect/>
    <Terms/>
    <Footer register={true}/>
  </form>
  )
}
