import { useState } from "react"
import WhereToList from "./WhereToList";
import SearchInput from "./SearchInput";
export default function WhereTo() {
    const [searchtext , setSearchtext]=useState("places to go , things to do , hotels...");
  return (
    <section className="w-full flex items-center justify-center mt-16">
       <div className="text-center">
       <h1 className="font-extrabold text-5xl text-darkslate">Where to?</h1>
       <WhereToList searchtext={searchtext} setSearchtext={setSearchtext}/>
       <SearchInput searchtext={searchtext}/>
       </div>
    </section>
  )
}
