import { useQuery } from "@tanstack/react-query"
import { getCountries } from "../../../services/countries.api"


export default function useCountries() {
  const {data:countries , isLoading} = useQuery({
    queryKey:["countries"],
    queryFn:getCountries
  })

  return {countries , isLoading}
}
