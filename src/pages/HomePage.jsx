import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
export default function HomePage() {
  return (
   <div className="px-4 py-2 w-full min-h-[100vh] bg-clearwhite">
    <NavBar/>
    <Outlet/>
      {/* <HomePageLayout/> */}
   </div>
  )
}
