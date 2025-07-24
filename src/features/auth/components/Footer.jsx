import Button from "../../../components/Button"
import { Link } from "react-router-dom"

export default function Footer({register}) {
  return (
    <footer className="col-span-6 sm:flex sm:items-center sm:gap-4">
    <Button color="sunset">Continue</Button>
    <p className="mt-4 text-sm text-gray-500 sm:mt-0 font-[600] cursor-pointer">
        {
            !register ?  <Link to="/register" className="text-darkturquoise underline">
            Dont have account yet?
            </Link> : <Link to="/login" className="text-darkturquoise underline">already have account?</Link>
        }
    </p>
</footer>
  )
}
