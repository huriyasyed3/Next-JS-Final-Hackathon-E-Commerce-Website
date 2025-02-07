import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import features from '../../public/Features.png'

const GetInTouch = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16'>
      <div className='w-full md:w-[536px] '>
        <div className='md:mt-10 md:ml-20 m-4'>
          <h1 className='text-[#2A254B] text-xl md:text-3xl lg:text-xl md:font-bold '>
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className='pt-4 text-sm md:text-xl lg:text-xl'>
            When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
          </p>
          <p className='pt-6 text-sm md:text-xl '>
            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique becomes the hotbed for the London interior design community.
          </p>
        
         <Button className='mr-10 bg-transparent bg-gray-100 mt-10  md:mt-28 pl-24 pr-24 md:pl-8 md:pr-8  text-[#2A254B] '>
                 Get in touch
                </Button>
                
        </div>
      </div>
      <div className='w-full md:w-[720px]'>
        <Image
          src={features}
          alt='sofa'
          width={720}
          height={603}
          className='w-full h-auto'
        />
      </div>
    </div>
  )
}

export default GetInTouch
