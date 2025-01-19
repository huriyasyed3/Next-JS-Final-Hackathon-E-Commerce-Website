import Brand from '@/components/brand'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import NewCramics from '@/components/NewCramics'
import PopularProducts from '@/components/Popular-Products'
import JoinClub from '@/components/join-club'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import  { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'
import ProductsFetch from '@/components/productFetch'
// import Data from './data/data'


const Home=()=> {
  return (
 

<div>
   

 
  
    
    <HeroSection/>
    <ProductsFetch/>
    <Brand/>
    <NewCramics/>
    <PopularProducts/>
    <JoinClub/>
    <GetInTouch/>
    <Footer/>
   
    </div>
    
  )
}

export default Home