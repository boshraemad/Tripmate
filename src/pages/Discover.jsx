import useCountries from "../features/Countries/customHooks/useCountries"
import Spinner from "../components/Spinner"

export default function Discover() {
  const {countries , isLoading} = useCountries();


  return (
    <div className="w-full h-full">
      {/* <h1 className='text-2xl font-bold  mt-6 mb-6 text-center text-darkslate tracking-wider'>Discover The World</h1> */}
      {
        isLoading ? <div className="w-full flex justify-center mt-20"><Spinner/></div> :
        <div className='grid grid-cols-4'>

        </div>
      }
    </div>
  )
}
