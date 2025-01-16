import Brand from '@/components/brand'
import Image from 'next/image'
import bgImage from '../../../public/bg1.jpeg'
import Footer from '@/components/Footer' 
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import JoinClub from '@/components/join-club'

const Aboutpage = () => {
  return (
    <>
  
    <div className=' w-[600px] h-[100px] items-center mx-auto mt-6 mb-4 '>

      <h2 className=' text-[#2A254B] font-thin text-lg md:text-2xl lg:text-3xl '>A brand built on the love of craftmanship,
      quality and outstanding customer service</h2>
          </div>
          <GetInTouch/>
        <Brand/>
        <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
        <div className="relative z-10 bg-black bg-opacity-50 flex items-center justify-center h-full">
        <JoinClub /> {/* Render Child Component */}
      </div>
       </div>
      <Footer/>
         
          </>
  )
}

export default Aboutpage