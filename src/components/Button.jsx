import React from 'react'

export default function Button({onClick , color , children}) {

  return (
    <button onClick={onClick} className={`inline-block shrink-0 rounded-md ${color} px-12 py-3 text-sm font-medium text-white transition focus:ring-3 focus:outline-hidden `}>
        {children}
    </button>
  )
}
