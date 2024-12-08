import React from 'react'
import Image from 'next/image'
import Sofa from '../../public/sofa.png'
import Chair from '../../public/chair.png'
import DandyChair from '../../public/dandyChair.png' 
import { Button } from './ui/button'
const PopularProducts = () => {
  return (
    <>
    <div className='container max-w-7xl mx-auto justify-between items-center mt-24    '>
    <h1 className=' text-2xl md:text-xl lg:text-3xl font-thin'>Our popular products</h1>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 border-none pt-6'>
  {/* First Item */}
  <div className='w-[630px] h-[375px] hidden md:block'>
    <Image src={Sofa} alt='Sofa' className=' '></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4'>The Poplar suede sofa</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl'>£980</h3>
  </div>

  {/* Second Item */}
  <div className='w-[305px] h-[375px] ml-52 hidden md:block'>
    <Image src={Chair} alt='chair' className='h-[375px] ml-4'></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4'>The Dandy chair</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl'>£250</h3>
  </div>

  {/* Third Item */}
  <div className='w-[305px] h-[375px] ml-28 hidden md:block'>
    <Image src={DandyChair} alt='Dandy-Chair' className=' '></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4'>The Dandy chair</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl'>£250</h3>
  </div>
</div>

        </div>
        <div className='flex justify-center'>
        <Button className='bg-transparent bg-gray-200 mt-20 pl-8 pr-8 md:ml-10 lg:ml-20'>
          View collection
        </Button>
      </div>
     </>
  )
}

export default PopularProducts