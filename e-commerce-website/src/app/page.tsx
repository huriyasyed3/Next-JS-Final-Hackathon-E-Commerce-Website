import Brand from '@/components/brand'
import HeroSection from '@/components/Hero'
import NewCramics from '@/components/NewCramics'
import PopularProducts from '@/components/Popular-Products'
import JoinClub from '@/components/join-club'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import ReviewsAndRatings from '@/components/Reviews&Ratings'

const Home = () => {
  return (
<div>
  
    <HeroSection/> 
    <Brand/>
    <NewCramics/>
    <PopularProducts/>
    <JoinClub/>
    <GetInTouch/>
    <ReviewsAndRatings/>
   
   
    </div>
    
  )
}

export default Home