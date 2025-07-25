import useGetCountry from "../../../Hooks/useGetCountry"
import Select from "react-select"
export default function CountriesSelect() {
    const countries = useGetCountry();
    const options= countries.map((country)=>{
       return {value:`${country.country}` , label:`${country.country}`}
    })

    const customStyles = {
        control: (provided) => ({
          ...provided,
          backgroundColor: "white",
          borderColor: "#FF6500",
          borderRadius: "4px",
          boxShadow: "none",
          "&:hover": {
            borderColor: "#FF6500",
          },
        }),
        option: (provided, state) => ({
          ...provided,
          backgroundColor: state.isFocused ? "#FF6500" : "white",
          color: "#111827",
          padding: "10px",
          cursor: "pointer",
        }),
        menu: (provided) => ({
          ...provided,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          marginTop: "4px",
        }),
        singleValue: (provided) => ({
          ...provided,
          color: "#1f2937",
          fontWeight: "500",
        }),
      };

  return (
    <div className="col-span-3">
        <label className="block text-sm mb-3 font-bold"><span className="me-1 text-xl text-sunset inline-block">*</span>Choose your country</label>
        <Select  styles={customStyles} menuPlacement="bottom" options={options}/>
    </div>
  )
}
