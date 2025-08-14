import { Controller , useForm} from "react-hook-form"
import ErrorMessage from "./ErrorMessage"
export default function Input({type , placeholder = "", label , width , control , expand , rules , name , isLoading=false}) {
  const {register} = useForm();
  return (
    <Controller
    control={control}
    {...register(name)}
    rules={rules}
    render={({field , fieldState : {error}})=>(
      <div className={`${width} ${expand ? `md:${width}` : "md:col-span-3"}`}>
      <label
      htmlFor={type}
      className="block text-sm font-medium text-gray-700"
    >
      {" "}
      {label}{" "}
    </label>

    <input
      {...field}
      type={type}
      id={label}
      name={type}
      placeholder={placeholder}
      disabled={isLoading}
      className="mt-1 w-full rounded-md border-2 bg-white text-sm text-gray-700 shadow-xs p-1.5 "
    />
    {
      error && <ErrorMessage message={error.message}/>
    }
  </div>
  )}
    />
  )
}
