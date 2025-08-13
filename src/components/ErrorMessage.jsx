import React from 'react'

export default function ErrorMessage({message}) {
  return (
    <p className='mt-3 px-4 py-2 text-sm text-red-700 bg-red-200 lg:max-w-[500px] max-w-[350px]'>{message}</p>
  )
}
