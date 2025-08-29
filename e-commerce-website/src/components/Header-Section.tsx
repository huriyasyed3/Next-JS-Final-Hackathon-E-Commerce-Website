'use client'

import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiHeart } from 'react-icons/fi'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import LanguageSwitcher from './LanguageSpeaking'
const HeaderSection = () => {

  return (
    <>
   
      {/* Header Section */}
      <div className="bg-white border-b-2 border-gray-300 px-6 py-2 flex items-center justify-between  ">
        {/* Heading for Mobile */}
        <h3 className="text-xl font-bold text-black md:hidden hover:text-purple-900">Avion</h3>
        
        {/* Icons for Desktop */}
        
        <div className="hidden md:flex items-center justify-between  w-full  ">
          <LanguageSwitcher/>
          <FiSearch size={20} className="hover:text-blue-500 cursor-pointer ml-2" />
          <h3 className="text-2xl text-black font-bold text-center flex-1">Avion</h3>
          <div className=" flex items-center space-x-4 ">
            <Link href={'/'} className='text-gray-500 hover:text-purple-900 text-sm'>Home</Link>
            <Link href={'about'} className='text-gray-500 hover:text-purple-900 text-sm'>About</Link>
            <Link href={'/AllProductsCollection'} className='text-gray-500 hover:text-purple-900 text-sm'>Products</Link>
            <Link href={'/contact'} className='text-gray-500 hover:text-purple-900 text-sm'>Contact</Link>
           <Link href="/Wishlist">
           <FiHeart size={20} className='text-gray-700 hover:text-red-500'/>
           </Link>
           
            <Link href={'/CartComponent'}>
            <FiShoppingCart size={24} className="hover:text-blue-500 cursor-pointer text-gray-700 " />
            </Link>
            <div className="border border-black rounded-full p-1">
              <Link href={'/UserProfile'}>
              <FiUser size={20} className="hover:text-blue-500 cursor-pointer text-gray-700" />
              </Link>
            </div>
            </div>
        </div>
       
        {/* Icons for Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
         
          <FiSearch size={20} className="hover:text-blue-500 cursor-pointer" />
          
          <Link href="/Wishlist">
           <FiHeart size={20} />
           </Link>
          <Sheet>
            <SheetTrigger>
              <FiMenu size={24} className="hover:text-blue-500 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">Avion</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4 ">
              <Link href={'/'} className='text-gray-500 hover:text-purple-900 text-sm'>
              Home
              </Link>
            <Link href={'about'} className='text-gray-500 hover:text-purple-900 text-sm'>
            About
            </Link>
            <Link href={'/AllProductsCollection'} className='text-gray-500 hover:text-purple-900 text-sm'>
           Products
            </Link>
            <Link href={'/contact'} className='text-gray-500 hover:text-purple-900 text-sm'>
            Contact
            </Link>
                <Link href="/PlantPots" className="text-gray-700 hover:text-purple-900">
                  Plant Pots
                </Link>
                <Link href="/Ceramics" className="text-gray-700 hover:text-purple-900">
                  Ceramics
                </Link>
                <Link href="/Tables" className="text-gray-700 hover:text-purple-900">
                  Tables
                </Link>
                <Link href="/Chairs" className="text-gray-700 hover:text-purple-900">
                  Chairs
                </Link>
                <Link href="/Crockery" className="text-gray-700 hover:text-purple-900">
                  Crockery
                </Link>
                <Link href="/Tableware" className="text-gray-700 hover:text-purple-900">
                  Tableware
                </Link>
                <Link href="/Cutlery" className="text-gray-700 hover:text-purple-900">
                  Cutlery
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar Links for Desktop */}
      <nav className="hidden md:flex justify-center bg-white py-4  ">
        <div className="flex space-x-8">
          <Link href="/PlantPots" className="text-gray-500 hover:text-purple-900 text-sm">
            Plant Pots
          </Link>
          <Link href="/Ceramics" className="text-gray-500 hover:text-purple-900 text-sm">
            Ceramics
          </Link>
          <Link href="/Tables" className="text-gray-500 hover:text-purple-900 text-sm">
            Tables
          </Link>
          <Link href="/Chairs" className="text-gray-500 hover:text-purple-900 text-sm">
            Chairs
          </Link>
          <Link href="/Crockery" className="text-gray-500 hover:text-purple-900 text-sm">
            Crockery
          </Link>
          <Link href="/Tableware" className="text-gray-500 hover:text-purple-900 text-sm">
            Tableware
          </Link>
          <Link href="/Cutlery" className="text-gray-500 hover:text-purple-900 text-sm">
            Cutlery
          </Link>
        </div>
      </nav>
    
    </>
  )
}

export default HeaderSection


