import asideImage from '../../../assets/images/asideImage.jpg'
export default function Aside() {
  return (
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
    <img
      alt=""
      src={asideImage}
      className="absolute inset-0 h-full w-full object-cover"
    />
  </aside>
  )
}
