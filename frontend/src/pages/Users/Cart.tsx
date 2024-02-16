import React, { useEffect, useState } from 'react'
import CartProduct from '../../components/CartProduct'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux-reducer/global'
import toast, { Toaster } from 'react-hot-toast'
import Button from '@/components/Button'

function Cart() {
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useDispatch()
  const productInTheCart = useSelector((state:any)=> state.globalState)
  console.log(productInTheCart);
  useEffect(() => {
    const totalPrice = productInTheCart.cart.reduce((accumulator: number, currentProduct: any) => {
        return accumulator + currentProduct.price;
    }, 0);
    setTotalPrice(totalPrice);
}, [productInTheCart]);

  
  return (
    <><Button title={`Total Price : $${`${totalPrice}`}`} />
    <div className='flex gap-3 flex-wrap mx-16'>
        {/* <CartProduct /> */}
        
        <Toaster  position="bottom-right"  reverseOrder={false}/>
        {
          productInTheCart.cart.map((pro:any)=>(

            <div key={pro?.id} className='h-80 w-64 border my-6 mx-4'>
           
            <div className='mb-2 relative'>
            <div className='bg-gray-700 flex justify-center items-center z-10 opacity-0 hover:opacity-100 absolute h-56 w-full'>
            <svg 
            onClick={ ()=>{ dispatch(removeFromCart(pro.id)) 
              toast.error('Product remove from cart') } }
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-16 cursor-pointer h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
                <img className='h-56 object-cover w-full' src={pro.image} alt={pro.name} />
            </div>
            <div className='mb-2'>
                <p className='line-clamp-2 cursor-pointer px-2 text-sm '>{pro.title}</p>
            </div>
            
            <div className='flex gap-3 px-4'>
                <p className='font-bold'>${pro.price}</p>
                <p className='font-extralight line-through'>${pro.price*2}</p>
                <p className='text-xs font-bold text-green-600'>{50}% OFF</p>
            </div>
        </div>  
        
          ))
        }
      
    </div>
    </>
  )
}

export default Cart