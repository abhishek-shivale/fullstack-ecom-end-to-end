import React from 'react'

function Product() {
  return (
    <div>
        <div className='h-80 w-64 border my-6 mx-4'>
            <div className='mb-2 relative'>
            <div className='bg-gray-700 flex justify-center items-center z-10 opacity-0 hover:opacity-100 absolute h-56 w-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 z-90 h-14 cursor-pointer text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            </div>
                <img className='h-56 object-cover w-full' src="https://rukminim2.flixcart.com/image/416/416/xif0q/wall-decoration/z/i/3/wooden-oval-shaped-multipupose-wall-hanging-decor-stands-flower-original-imagxa57j5fstcfz.jpeg?q=70&crop=false" alt="" />
            </div>
            <div className='mb-2'>
                <p className='line-clamp-2 cursor-pointer px-2 text-sm '>SHAJOC Wooden Oval Shaped Multipupose Wall Hanging | Decor Stands | Flower Pots Stand Pack of 4  (20 cm X 20 cm, Brown)</p>
            </div>
            <div className='flex gap-3 px-4'>
                <p className='font-bold'>₹246</p>
                <p className='font-extralight line-through'>₹499</p>
                <p className='text-xs font-bold text-green-600'>56% OFF</p>
            </div>
        </div>
    </div>
  )
}

export default Product