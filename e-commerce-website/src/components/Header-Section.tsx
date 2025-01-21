import React from 'react'
import { FiSearch, FiShoppingCart, FiUser, FiMenu } from 'react-icons/fi'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import TablewarePage from '@/app/Tableware/page'

const HeaderSection = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-white border-b-2 border-gray-300 px-6 py-2 flex items-center justify-between">
        {/* Heading for Mobile */}
        <h3 className="text-xl font-bold text-black md:hidden">Avion</h3>
        
        {/* Icons for Desktop */}
        <div className="hidden md:flex items-center justify-between w-full">
          <FiSearch size={20} className="hover:text-blue-500 cursor-pointer" />
          <h3 className="text-2xl text-black font-bold text-center flex-1">Avion</h3>
          <div className="flex items-center space-x-4">
            <FiShoppingCart size={20} className="hover:text-blue-500 cursor-pointer" />
            <div className="border border-black rounded-full p-1">
              <FiUser size={20} className="hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Icons for Mobile */}
        <div className="flex items-center space-x-4 md:hidden">
          <FiSearch size={20} className="hover:text-blue-500 cursor-pointer" />
          <Sheet>
            <SheetTrigger>
              <FiMenu size={24} className="hover:text-blue-500 cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold">Avion</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col space-y-4">
                <Link href="/PlantPots" className="text-gray-700 hover:text-black">
                  Plant Pots
                </Link>
                <Link href="/Ceramics" className="text-gray-700 hover:text-black">
                  Ceramics
                </Link>
                <Link href="/Tables" className="text-gray-700 hover:text-black">
                  Tables
                </Link>
                <Link href="/Chairs" className="text-gray-700 hover:text-black">
                  Chairs
                </Link>
                <Link href="/Crockery" className="text-gray-700 hover:text-black">
                  Crockery
                </Link>
                <Link href="/Tableware" className="text-gray-700 hover:text-black">
                  Tableware
                </Link>
                <Link href="/Cutlery" className="text-gray-700 hover:text-black">
                  Cutlery
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar Links for Desktop */}
      <nav className="hidden md:flex justify-center bg-white py-4 ">
        <div className="flex space-x-8">
          <Link href="/PlantPots" className="text-gray-500 hover:text-black text-sm">
            Plant Pots
          </Link>
          <Link href="/Ceramics" className="text-gray-500 hover:text-black text-sm">
            Ceramics
          </Link>
          <Link href="/Tables" className="text-gray-500 hover:text-black text-sm">
            Tables
          </Link>
          <Link href="/Chairs" className="text-gray-500 hover:text-black text-sm">
            Chairs
          </Link>
          <Link href="/Crockery" className="text-gray-500 hover:text-black text-sm">
            Crockery
          </Link>
          <Link href="/Tableware" className="text-gray-500 hover:text-black text-sm">
            Tableware
          </Link>
          <Link href="/Cutlery" className="text-gray-500 hover:text-black text-sm">
            Cutlery
          </Link>
        </div>
      </nav>
    </>
  )
}

export default HeaderSection
