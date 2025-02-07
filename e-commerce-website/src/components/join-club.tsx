import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const JoinClub = () => {
  return (
    <div className='w-[1500px] h-[481px] '>
    <div className=" mt-10 container max-w-full px-4 md:px-16 lg:px-24   md:border-4 md:border-gray-100
     md:border-t-[52px] md:border-l-[93px] md:border-b-[52px] md:border-r-[93px]">
      {/* Border on desktop */}
      <div className="mx-auto">
        {/* Inner Content */}
        <div className="max-w-6xl mx-auto py-8 md:py-12">
          <div className="md:text-center space-y-6 md:px-4 md:w-[571px] md:h-[114px] mx-auto">
            {/* Title */}
            <h1 className="md:font-thin  text-[#2A254B] text-base font-semibold md:text-4xl">
              Join the club and get the benefits
            </h1>
            {/* Description */}
            <p className="text-gray-700 text-xs md:text-xl md:font-light font-semibold ">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
            </div>
            {/* Input Section */}
            <div className=" md:mt-28 mt-12 flex flex-row justify-center items-center  w-full  ">
              <Input
                type="email"
                placeholder="your@email.com"
                className="text-gray-400 w-[224px] md:w-[350px] h-[56px] bg-gray-200"
              />
              <Button className="bg-[#2A254B] text-white font-light w-[118px] md:w-[118px] h-[56px] flex flex-row ">
                Sign Up
              </Button>
            </div>


            </div>
        </div>
      </div>
    </div>
  );
};

export default JoinClub;
