import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiCircleCheck} from 'react-icons/ci'
import { RiSeedlingLine } from 'react-icons/ri'
import { FaRegCreditCard } from 'react-icons/fa6'

const Brand = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto mt-20'>
    <h3 className='text-center text-2xl md:text-xl lg:text-3xl'>What makes our brand different</h3>
    <div className='mt-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-4'>
         <div className='w-[260px] h-[185px] font-thin  '>
          <TbTruckDelivery size={30} className='  mt-6 '/>
          <h3 className=' text-sm md:text-xl lg:text-xl pt-3'>Next day as standard</h3>
          <p className='pt-2'>Order before 3pm and get your order
          the next day as standard</p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          <CiCircleCheck size={30} className='  mt-6 '/>
          <h3 className=' text-sm md:text-xl lg:text-xl pt-3'>Made by true artisans</h3>
          <p className='pt-2'>Handmade crafted goods made with
          real passion and craftmanship
          </p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          <RiSeedlingLine size={30} className='  mt-6 '/>
          <h3 className=' text-sm md:text-xl lg:text-xl pt-3'>Unbeatable prices</h3>
          <p className='pt-2'>For our materials and quality you won’t find better prices anywhere
         </p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          < FaRegCreditCard size={30} className='  mt-6 '/>
          <h3 className=' text-sm md:text-xl lg:text-xl pt-3'>Recycled packaging</h3>
          <p className='pt-2'>We use 100% recycled packaging to ensure our footprint is manageable
         </p>
         </div>
    </div>
    </div>
    </>
  )
}

export default Brand