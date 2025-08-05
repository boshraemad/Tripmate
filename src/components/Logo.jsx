import logo from "../assets/images/logo.png"

export default function Logo() {
  return (
    <div className="flex gap-1">
         <img src={logo} alt="logo" className="w-8 h-8"/>
         <span className="block first-letter:text-sunset self-center text-2xl font-semibold whitespace-nowrap">Tripmate</span>
    </div>
  )
}
