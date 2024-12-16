import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import features from '../../public/Features.png'
const GetInTouch = () => {
  return (
    <div className='justify-between flex sm:flex-cols-1 md:flex'>
        <div className='w-[720px] h-[603px] '>
        <div className='w-[536px] h-[225px] mt-10  sm:ml-2  md:ml-28'>
            <h1 className='text-[#2A254B] text-2xl md:text-xl lg:text-2xl '>From a studio in London to a global brand with
            over 400 outlets</h1>
 <p className='pt-4 text-sm md:text-xl lg:text-xl '>When we started Avion, the idea was simple. Make high quality furniture affordable and available 
    for the mass market.</p >
    <p className='pt-6 text-sm md:text-xl '>Handmade, and lovingly crafted furniture and homeware is what we live, 
    breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
    <Button className='bg-transparent bg-gray-200 mt-48 pl-8 pr-8 text-[#2A254B]  '>Get in touch</Button>
        </div>
        </div>
        <div>
            <Image src={features} alt='sofa' width={720} height={603} />
        </div>
    </div>
  )
}

export default GetInTouch