import React from 'react'
import { Card, CardContent, CardDescription,CardHeader, CardTitle,} from "@/components/ui/card"
import Image from 'next/image'
import chair from '../../public/chair.png'
import vaseset from '../../public/VaseSet.png'
import silkyvase from '../../public/silkyvase.png'
import lucylamp from '../../public/lucylamp.png'
import { Button } from './ui/button'
import Link from 'next/link'
import ProductListing from './ProductListing'
const NewCramics = () => {
  return (
    <>
    <div className='container max-w-7xl mx-auto justify-between items-center md:mt-24 mt-20   '>
        <h1 className=' text-2xl md:text-xl lg:text-3xl font-thin pl-6 text-[#2A254B]'>New ceramics</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 border-none '>
         <Card className="h-full w-full max-w-sm  border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src={chair} alt='Chair' className="object-cover" fill/>
      </div>
</CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin">The Dandy chair</CardTitle>

    <CardDescription>£250</CardDescription>
</CardContent>

</Card>
<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src={vaseset} alt='VaseSet' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6 ">
    <CardTitle className="line-clamp-1 font-thin">Rustic Vase Set</CardTitle>
    <CardDescription>£155</CardDescription>
</CardContent>
</Card>

<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src={silkyvase} alt='SilkyVase' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin">The Silky Vase</CardTitle>
    <CardDescription>£125</CardDescription>
</CardContent>
</Card>

<Card className="h-full w-full max-w-sm border-none">
<CardHeader >
    <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
      <Image src={lucylamp} alt='Lucy-Lamp' className="object-cover" fill/>
      </div>
      </CardHeader>
<CardContent className="p-6">
    <CardTitle className="line-clamp-1 font-thin">The Lucy Lamp</CardTitle>
    <CardDescription>£399</CardDescription>
</CardContent>
</Card>
</div>

</div>
<div className='flex justify-center'>
  <a href='ProductListing'><Button className='bg-transparent bg-gray-200 mt-10 pl-8 pr-8 md:ml-10 lg:ml-20'>
    View collection
  </Button>
  </a>
</div>


</>

  )
}

export default NewCramics