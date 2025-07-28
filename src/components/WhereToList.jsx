export default function WhereToList({searchtext , setSearchtext}) {
    const listItems=[
            {item:"Search All", searchtext:"places to go , things to do , hotels..."}, 
            {item:"Hotels", searchtext:"Hotel name or destination"},
            {item:"Things to Do", searchtext:"Attraction , activity or destination"},
            {item:"Restaurants", searchtext:"Restaurant or destination"}
        ];
  return (
    <ul className="flex items-center justify-center mt-6 lg:space-x-10">
        {listItems.map((item)=><li className={`text-sm font-medium cursor-pointer text-darkslate hover:text-turquoise hover:bg-gray-100 px-3 py-1.5 rounded-lg ${item.searchtext === searchtext ? "text-turquoise bg-gray-100 rounded-lg" :""}`} key={item.item} onClick={()=>setSearchtext(item.searchtext)}>{item.item}</li>)}
    </ul>
  )
}
