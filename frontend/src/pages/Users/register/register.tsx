import toast, { Toaster } from 'react-hot-toast';
import { z } from 'zod';

 const RegisterSchema = z.object({
    username: z.string().email(),
    password: z.string().min(8).max(64),
    phoneNumber: z.string().min(10).max(10) 
});
import { useState } from "react";
import { RegisterReq } from '@/api/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkLoggedIn } from '@/redux-reducer/global';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const onClickHandle = async () => {
        const userData = {
            username: email,
            password: password,
            phoneNumber: phoneNo 
        };

        try {
          const value =  RegisterSchema.parse(userData);
          if(value){
           try {
            await RegisterReq(email, password, phoneNo);         
            toast.success('Your Account has been created');
            dispatch(checkLoggedIn());
            window.localStorage.setItem('loggedIn', 'true');
            setTimeout(()=>{navigate('/user/me')},1000)
          }catch (error:any) {
            return toast.error(error.response.data.error)
          }
           }
        } catch (err: any) {
            console.log(err.message);
            return toast.error('Enter valid Input');
        }

       
    };

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false}/>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register your account</h2>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="space-y-6" >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                            <div className="mt-2">
                                <input onChange={(e) => setPhoneNo(e.target.value)} id="phoneNumber" name="phoneNumber" type="text" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>

                        <div>
                            <button onClick={onClickHandle} className="flex w-full justify-center rounded-md bg-[#4f46e5] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        have an account?
                        <Link to={'/login'}>
                        <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Login  to your account here</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
