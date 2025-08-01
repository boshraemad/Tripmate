export default function SearchInput({searchtext}) {
  return (
<form className="max-w-md w-full mx-auto mt-6">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-darkslate sr-only">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 rounded-md bg-white outline-none focus:border-turquoise" placeholder={searchtext} />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-turquoise hover:turquoise focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>

  )
}
