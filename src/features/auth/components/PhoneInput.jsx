import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { handleOnChangeState } from "../../../utils/handleOnChangeState";

export default function PhoneNumberInput({state, setState}) {
  return (
    <div className="col-span-6">
    <label className="block text-sm mb-3 font-bold"><span className="me-1 text-xl text-sunset inline-block">*</span>Phone Number</label>
    <PhoneInput
      country={"eg"}
      inputStyle={{ width: "50%", borderRadius: "8px" }}
      containerStyle={{ marginBottom: "10px" }}
      onChange={(phone)=>handleOnChangeState(phone , setState)}
    />
  </div>
  )
}
