import Logo from "./Logo"
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=' bg-darkslate text-gray-200 flex flex-col md:flex-row md:justify-between gap-3 items-center p-4'>
      <Logo/>
      <p className="md:text-sm text-xs">Copyright2025&copy;all rights reserved</p>
      <ul className="flex items-center gap-6 md:text-xl text-md">
        <li><a><FaFacebookSquare/></a></li>
        <li><a><FaInstagram/></a></li>
        <li><a><BsTwitterX/></a></li>
      </ul>
    </footer>
  )
}
