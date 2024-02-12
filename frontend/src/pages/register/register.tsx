import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react"
// import { resType } from '@/types';
import { RegisterReq } from '@/api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLoggedIn } from '@/redux-reducer/global';


function register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneNo, setPhoneNo] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
   
  const onClickHandle = async() =>{
   const req:any = await RegisterReq(email,password,phoneNo)
   const data  = await req.data

   if(data?.success == true){
    toast.success('Your Account has been created');
    dispatch(checkLoggedIn())
    navigate('/completeprofile')

   }else if(data?.success == false){
    toast.error(data?.error)

   }else{
    toast.error('Register Failed')
   }
  }

    return (
    <div>
       <Toaster  position="top-center"  reverseOrder={false}/>
       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
        </div>
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" >
          {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
              <div className="mt-2">
                <input id="email" name="email" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div> */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input onChange={(e)=>{setPassword(e.target.value)}} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
              <div className="mt-2">
                <input onChange={(e)=>{const value = parseInt(e.target.value)
                  setPhoneNo(value)
                }} id="email" name="email" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            {/* <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
              <div className="mt-2">
                <input id="email" name="email" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div> */}


            <div>
              <button onClick={onClickHandle} className="flex w-full justify-center rounded-md bg-[#4f46e5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            have an account?
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login  to your account here</a>
          </p>
        </div>
      </div>
   
    
    </div>
  )
}

export default register