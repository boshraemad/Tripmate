import unknownImage from "../../src/assets/images/unknown.png"

export default function Avatar() {
  return (
    <img className="w-8 h-8 rounded-full" src={unknownImage} alt="user photo"/>
  )
}
