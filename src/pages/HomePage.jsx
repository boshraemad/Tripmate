import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
export default function HomePage() {
  return (
   <div className=" grid grid-rows-[auto_1fr_auto] w-full min-h-[100vh] bg-clearwhite">
    <NavBar/>
    <Outlet/>
      {/* <HomePageLayout/> */}
      <Footer/>
   </div>
  )
}
