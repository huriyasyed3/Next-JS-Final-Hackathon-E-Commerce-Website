import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiCircleCheck} from 'react-icons/ci'
import { RiSeedlingLine } from 'react-icons/ri'
import { FaRegCreditCard } from 'react-icons/fa6'

const Brand = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto mt-4 md:mt-12 lg:mt-20'>
    <h3 className='md:text-center text-2xl md:text-xl lg:text-3xl pb-4 font-semibold text-[#2A254B] pl-4  '>What makes our brand different</h3>
    <div className='mt-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-4'>
         <div className='w-[260px] h-[185px] font-thin  '>
          <TbTruckDelivery size={30} className='  mt-2 text-[#2A254B]'/>
          <h3 className=' text-xl md:text-xl lg:text-xl pt-3 text-[#2A254B]'>Next day as standard</h3>
          <p className='pt-2 text-[#2A254B]'>Order before 3pm and get your order
          the next day as standard</p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          <CiCircleCheck size={30} className='  mt-2 text-[#2A254B] '/>
          <h3 className=' text-xl md:text-xl lg:text-xl pt-3 text-[#2A254B]'>Made by true artisans</h3>
          <p className='pt-2 text-[#2A254B]'>Handmade crafted goods made with
          real passion and craftmanship
          </p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          <RiSeedlingLine size={30} className='  mt-2 text-[#2A254B] '/>
          <h3 className=' text-xl md:text-xl lg:text-xl pt-3 text-[#2A254B]'>Unbeatable prices</h3>
          <p className='pt-2 text-[#2A254B]'>For our materials and quality you won’t find better prices anywhere
         </p>
         </div>
         <div className='w-[260px] h-[185px] font-thin  '>
          < FaRegCreditCard size={30} className='  mt-2 text-[#2A254B]'/>
          <h3 className=' text-xl md:text-xl lg:text-xl pt-3 text-[#2A254B]'>Recycled packaging</h3>
          <p className='pt-2 text-[#2A254B]'>We use 100% recycled packaging to ensure our footprint is manageable
         </p>
         </div>
    </div>
    </div>
    </>
  )
}

export default Brand