import { handleOnChangeState } from "../utils/handleOnChangeState"

export default function Input({type , label , width , state , setState}) {
  return (
     <div className={`${width} sm-col-span-3`}>
        <label
        htmlFor={type}
        className="block text-sm font-medium text-gray-700"
      >
        {" "}
        {label}{" "}
      </label>

      <input
        type={type}
        id={type}
        name={type}
        className="mt-1 w-full rounded-md border-2 bg-white text-sm text-gray-700 shadow-xs p-1.5 "
        onChange={(e)=>handleOnChangeState(e.target.value , setState)}
      />
    </div>
  )
}
