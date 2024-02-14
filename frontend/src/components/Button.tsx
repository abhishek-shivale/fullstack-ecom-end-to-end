import React from 'react'

function Button({title}:any) {
  return (
    <div>
  <div className='border rounded-md border-indigo-600 bg-indigo-600 text-white text-center cursor-pointer my-2 py-2 px-3'>{title}</div>
    </div>
  )
}

export default Button