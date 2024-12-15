import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const JoinClub = () => {
  return (
    
        <div className=' w-[1440px] h-[481px] mx-auto   mt-10 container max-w-full  justify-between items-center
         border-gray-100 border-4 border-t-[52px]  border-l-[93px]  border-b-[52px]  border-r-[93px] md-flex  '>
           <div className='w-[1273px] h-[364px] m-8'>
           <div className='mx-auto items-center justify-between w-[571px] h-[114px]  gap-[16px] mt-14'>
                <h1 className='font-thin text-[#2A254B] text-3xl text-center'>Join the club and get the benefits</h1>
                <p className='text-center text-xl font-thin'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div className='mt-20  flex  mx-auto w-[470px] h-[56px] '>
                <Input type='email' placeholder='your@email.com' className='text-gray-400  w-[354px] h-[56px] bg-gray-200'/>
                <Button className='bg-[#2A254B] text-white font-thin w-[118px] h-[56px]'>Sign Up</Button>
              </div>
              </div>
             
              <div>

              </div>
           </div>
             
            </div>
       
   
  )
}

export default JoinClub


