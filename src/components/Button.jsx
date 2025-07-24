import React from 'react'

export default function Button({onclick , color , children}) {
  return (
    <button className={`inline-block shrink-0 rounded-md border bg-${color} px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden `}>
        {children}
    </button>
  )
}
