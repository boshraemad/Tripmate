import { Link } from "react-router-dom";
import { motion } from "motion/react"
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
export default function HeadingSection({children}) {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
        <h2 className="md:text-3xl text-xl tracking-wider font-bold text-center text-darkslate">{children}</h2>
        <motion.button
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.95 }}
         className="mb-2 bg-darkturquoise text-white px-2 py-1 rounded-sm"><Link className="text-xl font-bold" to="/discover">
            <MdOutlineKeyboardDoubleArrowRight/></Link></motion.button>
    </div>
  )
}
