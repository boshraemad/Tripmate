import React from 'react'

export default function Button({onClick , color , children , isLoading=false}) {

  return (
    <button disabled={isLoading} onClick={onClick} className={`inline-block shrink-0 rounded-md ${color} md:px-10 md:py-3 px-4 py-2 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden `}>
        {children}
    </button>
  )
}
