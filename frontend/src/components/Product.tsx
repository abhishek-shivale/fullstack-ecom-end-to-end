import { addToCart } from '@/redux-reducer/global';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';

function Product() {
    const [data, setData] = useState<any>([]);
    const dispatch = useDispatch()
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    { console.log(data)}
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <div className='flex gap-3 flex-wrap mx-16'>
        <Toaster  position="bottom-right"  reverseOrder={false}/>
{      data!==null?data.map((pro:any)=>(
                <div key={pro?.id} className='h-80 w-64 border my-6 mx-4'>
            <div className='mb-2 relative'>
            <div className='bg-gray-700 flex justify-center items-center z-10 opacity-0 hover:opacity-100 absolute h-56 w-full'>
            <svg 
            onClick={
                ()=>{
                    dispatch(addToCart(pro))
                    toast.success('Product Added to cart')
                }
            }
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-14 z-90 h-14 cursor-pointer text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
            )):<></>
        }
    </div>
  )
}

export default Product