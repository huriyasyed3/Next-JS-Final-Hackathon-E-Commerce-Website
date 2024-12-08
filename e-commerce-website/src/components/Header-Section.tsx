// import React from 'react'
// import { FiSearch ,FiShoppingCart, FiUser ,FiMenu} from 'react-icons/fi'
// import Link from 'next/link'
// import { Sheet  ,SheetContent ,SheetTrigger ,SheetHeader, SheetTitle  } from '@/components/ui/sheet';
// const HeaderSection = () => {
//   return (
//   <>
//      <div className="bg-white md:flex items-center justify-between px-6 py-2 border-b-2 border-gray-300 ">
//      <FiSearch  size={20} className='hover:text-blue-500 cursor-pointer hidden lg:flex mt-4'/>
//         <div className="text-black text-center flex-1 text-sm font-normal mx-auto p-4">
           
//           <h3 className="text-2xl pl-4 md:pl-0 text-left md:text-center">
//           Avion
//           </h3>
//           </div>
     
//       <FiShoppingCart size={20} className="hover:text-blue-500 cursor-pointer hidden md:flex " />
//      <div className='border border-black rounded-full ml-2 hidden md:flex'> <FiUser size={20} className=" hover:text-blue-500 cursor-pointer border-1"/>
//      </div>
// </div>
// <nav className="w-full  p-4">
//         <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
//           {/* Logo */}
        
//                 {/* Navbar Links (Hidden on Small Screens) */}
//                 <div className="hidden md:flex gap-12 mx-auto">
//               <Link href="/" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Plant pots
//               </Link>
//               <Link href="/contact" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Ceramics
//               </Link>
            
//               <Link href="/about" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Tables
//               </Link>
            
//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Chairs
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Crockery
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Tableware
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Cutlery
//               </Link>
//               </div>
//               <Sheet>
//             <SheetTrigger className='flex  flex-row md:hidden'>
//       <FiSearch className="text-gray-500" size={18} />
//       <FiMenu size={20} />
    
//   </SheetTrigger>
//      <SheetContent>
//             <SheetHeader className='text-left'>
//             <SheetTitle className='text-white '>Avion</SheetTitle>
//             </SheetHeader>
//               <div className='flex flex-col gap-6 mt-6'>
//               <Link href="/" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Plant pots
//               </Link>
//               <Link href="/contact" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Ceramics
//               </Link>
            
//               <Link href="/about" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Tables
//               </Link>
            
//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Chairs
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Crockery
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Tableware
//               </Link>

//               <Link href="/signup" className="text-gray-500 text-sm font-normal hover:text-black-500">
//                 Cutlery
//               </Link>
              
//            </div>
//            </SheetContent>
//            </Sheet>
//               </div>
//               </nav>
     
//       </>
//   )

// }

// export default HeaderSection


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
                <Link href="/" className="text-gray-700 hover:text-black">
                  Plant Pots
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Ceramics
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Tables
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Chairs
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Crockery
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Tableware
                </Link>
                <Link href="/" className="text-gray-700 hover:text-black">
                  Cutlery
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Navbar Links for Desktop */}
      <nav className="hidden md:flex justify-center bg-white py-4 border-b border-gray-300">
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Plant Pots
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Ceramics
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Tables
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Chairs
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Crockery
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Tableware
          </Link>
          <Link href="/" className="text-gray-500 hover:text-black text-sm">
            Cutlery
          </Link>
        </div>
      </nav>
    </>
  )
}

export default HeaderSection
