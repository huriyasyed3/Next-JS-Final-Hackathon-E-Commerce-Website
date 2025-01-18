import React from 'react'
import Image from 'next/image';
import { Card, CardContent, CardDescription,CardHeader, CardTitle,} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

const Data =  ({info}:{info:Data}) => {
 
  return(
    <div className='container max-w-7xl mx-auto justify-between items-center  mt-20 '>
     
        <div className='flex flex-cols-2 md:flex-cols-4 gap-4  '>
      <Card className='h-full w-full max-w-sm  '>
        <CardHeader>
        <div className="aspect-[3/2] relative overflow-hidden rounded-t-lg">
          <img src={info.image}
          alt='img'
          width={400}
          height={400}
          className="object-cover" 
          />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className='line-clamp-1 font-thin text-[#2A254B]'>
            <h1>{info.name}</h1>
          </CardTitle>
          <CardDescription className='text-[#2A254B]'>
            <p>{info.price}$</p>
            <Button className='bg-blue-500 rounded-lg text-white justify-center items-center flex'>Add to cart</Button>
          </CardDescription>
        </CardContent>
      </Card>
      </div>
    </div>
  )
}

export default Data

