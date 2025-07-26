import landing from "../assets/images/landing.jpg"
import Button from "./Button"
export default function Landing() {
  return (
    <section className="flex lg:flex-row flex-col items-center justify-center mt-10 mb-10 lg:mx-10 bg-turquoise ">
        <div className="img lg:w-[50%]">
            <img src={landing} alt="landing image" className="w-full p-6"/>
        </div>
        <hr className="lg:w-[2px] lg:h-[300px] w-[300px] h-[2px] bg-white"/>
        <div className="text w-[50%] text-center lg:pb-0  pb-6">
            <h2 className="lg:font-extrabold font-bold text-white lg:text-5xl text-2xl lg:mt-0 mt-6 mb-6">Find things to do <br/> for everythings <br/> you are into</h2>
            <Button color="bg-sunset">Start Now</Button>
        </div>
    </section>
  )
}
