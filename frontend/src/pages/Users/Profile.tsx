import Button from '@/components/Button'
import Profilecomponent from '@/components/Profilecomponent';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'



function Profile() {
  const secondDiv  = useRef<HTMLDivElement>(null)
  function onClickHandler() {
    if (secondDiv.current) {
        secondDiv.current.style.display = 'none';
    }
}




  return (
    <>
    <Button title={'Profile Edit'} />
    <div className='flex'>
       <div className="  border border-black">
       <div className='px-5 my-3'>
        <div onClick={()=>{
         secondDiv.current? secondDiv.current.style.display = 'block': <></>
        }}>

       <Button title={'My Profile'} />
        </div>
        {/* <Link to={'/'}> */}
        <div onClick={onClickHandler}>
        <Button title={'Change Password'} />
        </div>
        {/* </Link> */}
       <Button title={'Logout'} />
        <Button title={'My orders'} />
        <Button title={'Delete Account'}/>
       </div>
        </div>
      <div ref={secondDiv}>
      <Profilecomponent />
      </div>
       
    </div>
    </>
  )
}

export default Profile