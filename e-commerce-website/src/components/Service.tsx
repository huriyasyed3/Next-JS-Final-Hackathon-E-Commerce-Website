import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image';

const Service = () => {
  return (
    <>
   

           <div className='flex flex-col md:flex-row  '>
        <div className=''>
          <Image 
            src='/about2.png'
            alt='Sofa'
            width={720}
            height={603}
            className='object-cover'
          />
        </div>
        <div className='max-w-lg items-center justify-between md:m-28 m-3 '>
          <h1 className='text-[#2A254B] md:text-3xl font-thin text-xl'>
            Our service isn&apos;t just personal, it&apos;s actually hyper personally exquisite
          </h1>
          <p className='pt-4 text-[#2A254B]'>
            When we started Avion, the idea was simple. Make high
            quality furniture affordable and available for the mass market.
          </p>
          <p className='pt-4 text-[#2A254B]'>
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design so our Chelsea boutique became
            the hotbed for the London interior design community.
          </p>
          <Button className='bg-gray-100  px-8 py-3 text-[#2A254B] md:mt-28 mt-10  '>
            Get in touch
          </Button>
          </div>
  </div>
    </>
  )
}

export default Service