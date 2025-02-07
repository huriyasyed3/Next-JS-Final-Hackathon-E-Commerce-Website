'use client'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import chair from '../../public/chair.png'
import { useRouter } from 'next/navigation'

const HeroSection = () => {
  const router = useRouter()
  const handleFucn = () => {
    router.push("/AllProductsCollection")
  }
  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Hero Section */}
      <div className="bg-[#2A254B] text-white rounded-lg grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Content Section */}
        <div className="p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            The furniture brand for the future, with timeless designs
          </h2>
         
          <Button  className="order-2 lg:order-1 bg-gray-500 hover:bg-gray-400 text-white mt-6 px-6 
          py-3 rounded-md"
          onClick={handleFucn}
          >
            View Collection
          </Button>
          
          <div  className=' order-1 lg:order-2 md:pt-48'>
         <p className="mt-8 text-sm md:text-base lg:text-lg leading-relaxed">
            A new era in eco-friendly furniture with Avion, the French luxury retail brand
            with tasteful colors, nice fonts, and modern web technologies to display things digitally.
          </p>
          </div>
         </div>
         

        {/* Image Section */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src={chair}
            alt="chair-image"
            className="w-3/4 md:w-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
