
'use client';
import Brand from '@/components/brand'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import Service from '@/components/Service';
 const Aboutpage = () => {
   return (
     <>
{/* <div className="bg-gray-900 text-white text-center py-2 text-sm">
Free delivery on all orders over £50 with code easter checkout
</div> */}
   <div className=' md:w-[600px] md:h-[100px] items-center mx-auto mt-6 mb-4   '>

     <h2 className=' text-[#2A254B] md:font-thin text-2xl md:text-2xl lg:text-3xl p-3 '>
         A brand built on the love of craftmanship,
       quality and outstanding customer service</h2>
       </div>
           <GetInTouch/>         <Brand/>
        {/* <div className="relative h-screen"> */}
      {/* Background Image */}
       {/* <div className="absolute inset-0">
         <Image
          src={bgImage}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div> */}
         {/* <div className="relative z-10 bg-black bg-opacity-50 flex items-center justify-center h-full">
        <JoinClub />                                
      </div>  */}
       {/* </div> */}
        <Service/>
          </>
   )
 }

 export default Aboutpage



    

    
      
     
      

     



