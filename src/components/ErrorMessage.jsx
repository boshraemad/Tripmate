import React from 'react'

export default function ErrorMessage({message}) {
  return (
    <p className='px-4 py-2  font-semibold text-red-700 bg-red-200 lg:w-[500px] w-[350px] rounded-lg'>{message}</p>
  )
}
