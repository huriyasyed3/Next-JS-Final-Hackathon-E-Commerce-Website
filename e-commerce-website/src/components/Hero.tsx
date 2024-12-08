// import React from 'react'
// import { Button } from './ui/button'
// import Image from 'next/image'
// import chair from '../../public/chair.png'
// const HeroSection = () => {
//   return (
//     <div className=' container max-w-7xl mx-auto justify-between items-center flex flex-cols-1'>
       
            
//                 <div className='bg-[#2A254B]  w-[1280px] h-[584px] mt-6 grid sm:grid-cols-1'>
//                    <div className=' flex items-center justify-between'>
//                     <div  className='w-[400px] h-52 ml-20 mb-48 '>
//                    <h2 className='text-white font-normal text-sm md:text-xl lg:text-3xl '>The furniture brand for the future, with timeless designs</h2>
//                  <div className='w-[550px] '>  <Button className=' bg-transparent  text-white bg-gray-400 mt-10 p-6'>View collection</Button>
//                    <p className=' text-white pt-48 text-sm md:text-xl lg:text-xl'>A new era in eco friendly furniture with Avelon, the French luxury retail brand
// with nice fonts, tasteful colors and a beautiful way to display things digitally 
// using modern web technologies.</p>
// </div>
//                    </div>
//                    <div className='hidden md:flex'>
//                     <Image src={chair} alt='chair-image'  className='ml-18  bg-cover float-right'></Image>
//                    </div>
//                    </div>
//                     </div>
//             </div>
        
       
   
//   )
// }

// export default HeroSection




import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import chair from '../../public/chair.png'

const HeroSection = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col justify-between items-center">
      <div className="bg-[#2A254B] w-full h-auto mt-6 p-6 grid sm:grid-cols-1 md:h-[584px]">
        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-[400px] ml-4 md:ml-20 mb-4 md:mb-48">
            {/* Headline */}
            <h2 className="text-white font-normal text-lg md:text-2xl lg:text-3xl">
              The furniture brand for the future, with timeless designs
            </h2>
  {/* Button */}
  <div className="mt-6">
              <Button className="bg-transparent text-white bg-gray-400 px-4 py-2">
                View collection
              </Button>
            </div>
            {/* Description */}
            <p className="text-white text-sm md:text-lg mt-40">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand.
              With nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>

          
          </div>

          {/* Image Section */}
          <div className="hidden md:flex">
            <Image
              src={chair}
              alt="chair-image"
              className="ml-18 object-cover float-right"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

