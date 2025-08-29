import React from 'react'
import { Card, CardContent, CardDescription,CardHeader, CardTitle,} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

const NewCramics = () => {
  return (
    <>
    <div className='container max-w-7xl mx-auto justify-between items-center  mt-20   '>
        <h1 className=' text-2xl md:text-xl lg:text-3xl font-thin pl-6 text-[#2A254B]'>New ceramics</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 border-none '>
         <Card className="h-full w-full max-w-sm  border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src='/chair.png' alt='Chair' className="object-cover" fill/>
      </div>
</CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin text-[#2A254B]">The Dandy chair</CardTitle>

    <CardDescription className='text-[#2A254B]'>£250</CardDescription>
</CardContent>

</Card>
<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src='/VaseSet.png' alt='VaseSet' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6 ">
    <CardTitle className="line-clamp-1 font-thin text-[#2A254B]">Rustic Vase Set</CardTitle>
    <CardDescription className='text-[#2A254B]'>£155</CardDescription>
</CardContent>
</Card>

<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src='/silkyvase.png' alt='SilkyVase' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin text-[#2A254B]">The Silky Vase</CardTitle>
    <CardDescription className='text-[#2A254B]'>£125</CardDescription>
</CardContent>
</Card>

<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src='lucylamp.png' alt='Lucy-Lamp' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin text-[#2A254B]">The Lucy Lamp</CardTitle>
    <CardDescription className='text-[#2A254B]'>£399</CardDescription>
</CardContent>
</Card>
</div>

</div>
<div className='flex justify-center'>
  <Link href='/AllProductsCollection'>
  <Button className='bg-transparent bg-gray-100 mt-10  md:mt-28 pl-24 pr-24 md:pl-8 md:pr-8 md:ml-10 lg:ml-20 text-[#2A254B] '>
            View collection
          </Button>
  </Link>
</div>


</>

  )
}

export default NewCramics