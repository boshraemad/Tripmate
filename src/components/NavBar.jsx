import { NavLink , Link , useNavigate } from "react-router-dom";
import logoImage from "../../src/assets/images/logo.png"
import Avatar from "./Avatar";
import Button from "./Button";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { initFlowbite } from "flowbite";
import { isAction } from "@reduxjs/toolkit";


export default function NavBar() {
  const userId = useSelector((state)=>state.userSlice.userId);
  const navigate = useNavigate();

    useEffect(()=>{
        initFlowbite();
    },[])

  return (
    <nav className="bg-transparent border-gray-200 sticky z-10 top-[0] bg-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logoImage} className="h-8" alt="Flowbite Logo" />
      <span className="block first-letter:text-sunset self-center text-2xl font-semibold whitespace-nowrap">Tripmate</span>
  </Link>
  <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    {userId ? <>
      <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <Avatar/>
      </button>
      <div className="z-50 relative hidden my-4 text-base list-none bg-white border-2 border-sunset divide-y divide-gray-100 rounded-lg shadow-sm lg:w-[23%] sm:w-[40%] w-[45%]" id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate">name@flowbite.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <NavLink to="/userTrips" className={` togglelink ${({isActive})=> isActive? "activetogglelink " : "unactivetogglelink"}`}>My Trips</NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={` togglelink ${({isActive})=> isActive? "activetogglelink " : "unactivetogglelink"}`}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/bookmarks" className={` togglelink ${({isActive})=> isActive? "activetogglelink " : "unactivetogglelink"}`}>Bookmarks</NavLink>
          </li>
          <li>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Sign out</button>
          </li>
        </ul>
      </div>
    </> : <Button color="bg-turquoise" onClick={()=>navigate("/login")}>sign in</Button>
    
    }
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
      <li>
        <NavLink to="/"  className={({ isActive }) => isActive ? "navlink activenavlink" : "navlink unactivenavlink"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/discover" className={({ isActive }) => isActive ? "navlink activenavlink" : "navlink unactivenavlink"}>Discover</NavLink>
      </li>
      <li>
        <NavLink to="/trips" className={({ isActive }) => isActive ? "navlink activenavlink" : "navlink unactivenavlink"}>Trips</NavLink>
      </li>
      <li>
        <NavLink to="/userReview" className={({ isActive }) => isActive ? " navlink activenavlink" : "navlink unactivenavlink"}>Review</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
