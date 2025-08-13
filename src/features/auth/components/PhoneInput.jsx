import "react-phone-input-2/lib/style.css";
import PhoneInput from 'react-phone-input-2';
import { Controller , useForm } from "react-hook-form";
import ErrorMessage from "../../../components/ErrorMessage";

export default function PhoneNumberInput({control , name , rules}) {
  const {register} = useForm();
  return (
    <Controller
    {...register(name)}
    control={control}
    rules={rules}
    render={({field , fieldState:{error}}) =>(
      <div className="col-span-6">
      <label className="block text-sm mb-3 font-bold"><span className="me-1 text-xl text-sunset inline-block">*</span>Phone Number</label>
      <PhoneInput
        {...field}
        country={"eg"}
        inputStyle={{ width: "50%", borderRadius: "8px" }}
        containerStyle={{ marginBottom: "10px" }}
      />
      {
        error &&
        <ErrorMessage message={error.message}/>
      }
    </div>
    )}
    />
  )
}
