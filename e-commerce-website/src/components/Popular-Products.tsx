import React from 'react'
import Image from 'next/image'
import lucylamp from '../../public/lucylamp.png'
import chair from '../../public/chair.png'
import sofa from '../../public/sofa.png'
import dandyChair from '../../public/dandyChair.png'
import VaseSet from '../../public/VaseSet.png'

import { Button } from './ui/button'
const PopularProducts = () => {
  return (
    <>
    <div className='container max-w-7xl mx-auto justify-between items-center mt-24    '>
    <h1 className=' text-2xl md:text-xl lg:text-3xl font-thin text-[#2A254B]'>Our popular products</h1>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 border-none pt-6'>
  {/* First Item */}
  <div className='w-[630px] h-[375px] hidden md:block'>
    <Image src={sofa} alt='Sofa' className=' '></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4 text-[#2A254B]'>The Poplar suede sofa</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl text-[#2A254B]'>£980</h3>
  </div>

  {/* Second Item */}
  <div className=' w-[305px] h-[375px] ml-52 hidden md:block'>
    <Image src={chair} alt='chair'width={500} height={500} className='h-[375px] ml-4' ></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4 text-[#2A254B]'>The Dandy chair</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl text-[#2A254B]'>£250</h3>
  </div>

  {/* Third Item */}
  <div className='w-[305px] h-[375px] ml-28 hidden md:block'>
    <Image src={dandyChair} alt='Dandy-Chair' className=' '></Image>
    <p className='font-thin text-sm md:text-xl lg:text-xl pt-4 text-[#2A254B]'>The Dandy chair</p>
    <h3 className='font-thin text-sm md:text-xl lg:text-xl text-[#2A254B]'>£250</h3>
  </div>
  {/* mobile screen */}
  <div className='md:hidden ml-4 '>
  <Image src={lucylamp} alt='Lucy-Lamp' width={200} height={251} className="object-cover " />
  <p className='font-thin text-sm md:text-xl lg:text-xl pt-4 text-[#2A254B]'>The Lucy Lamp</p>
  <h3 className='font-thin text-sm md:text-xl lg:text-xl text-[#2A254B]'>£399</h3>
  </div>
  <div className='md:hidden ml-4 '>
  <Image src={VaseSet} alt='VaseSet' width={200} height={251} className="object-cover " />
  <p className='font-thin text-sm md:text-xl lg:text-xl pt-4 text-[#2A254B]'>Rustic Vase Set</p>
  <h3 className='font-thin text-sm md:text-xl lg:text-xl text-[#2A254B]'>£155</h3>
  </div>

</div>

        </div>
        <div className='flex justify-center'>
        <Button className='bg-transparent bg-gray-100 mt-10  md:mt-28 pl-24 pr-24 md:pl-8 md:pr-8 md:ml-10 lg:ml-20 text-[#2A254B] '>
          View collection
        </Button>
      </div>
     </>
  )
}

export default PopularProducts