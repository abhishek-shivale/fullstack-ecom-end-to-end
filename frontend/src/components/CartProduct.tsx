import React from 'react'

function CartProduct() {
  return (
    <div className='flex h-36 w-3/5 border my-2 mx-4'>
        <div className='mx-3 my-3'>
            <img className='h-28 w-28' src="https://rukminim2.flixcart.com/image/612/612/xif0q/wall-decoration/z/i/3/wooden-oval-shaped-multipupose-wall-hanging-decor-stands-flower-original-imagxa57j5fstcfz.jpeg?q=70" alt="" />
        </div>
        <div>
        <div className='mb-2 w-[400px] my-3'>
                <p className='line-clamp-1 cursor-pointer px-2 text-xl '>SHAJOC Wooden Oval Shaped Multipupose Wall Hanging | Decor Stands | Flower Pots Stand Pack of 4  (20 cm X 20 cm, Brown)</p>
            </div>
            <div className='flex gap-3 px-4 my-3'>
                <p className='font-bold'>₹246</p>
                <p className='font-extralight line-through'>₹499</p>
                <p className='text-xs font-bold text-green-600'>56% OFF</p>
            </div>
        </div>
        <div className='my-3'>
          <p>Delivery by Sat Feb 17 | <span className='text-green-500'>Free</span></p>
        </div>
    </div>
  )
}

export default CartProduct