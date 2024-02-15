import { useEffect, useState } from "react";
import Button from "./Button";
import React from 'react';
import { User } from "@/utils/types";

function Profilecomponent() {
    const [userData, setUserData] = useState<User>({
        name: '',
        email: '',
        phoneNumber: '',
        address: ''
      })

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setUserData(toString(e.target.value))
      };

    // useEffect(()=>{
    //     const bodyKeys: Array<keyof User> = ['name', 'email', 'phoneNumber', 'address'];

    //     bodyKeys.forEach((key)=>{
    //         if([key]){
    //             [] = key
    //         }
    //     })
    // })

    return (      <>    
     <div>
        <label className='mx-4'>Name</label>
        <input
            type="text"
            value={userData.name}
            onChange={handleChange}
            className='focus:outline-none border-black border'
        />
    </div>
    <div className='my-3'>
        <label className='mx-4'>Email</label>
        <input
            type="email"
            value={userData.email}
            onChange={handleChange}
            className='focus:outline-none border-black border'
        />
    </div>
    <div className='my-3'>
        <label className='mx-4'>Address</label>
        <input
            type="text"
            value={userData.address}
            onChange={handleChange}
            className='focus:outline-none border-black border'
        />
    </div>
    <div className='my-3'>
        <label className='mx-4'>Phone number</label>
        <input
            type="text"
            value={userData.phoneNumber}
            onChange={handleChange}
            className='focus:outline-none border-black border'
        />
    </div>
    <div onClick={()=>{
        console.log(userData);
        
    }}>

    <Button title={'Save Changes'} />
    </div>
            </> 
    );
}

export default Profilecomponent;
