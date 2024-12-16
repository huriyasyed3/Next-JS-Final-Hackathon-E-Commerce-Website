import Brand from '@/components/brand'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import NewCramics from '@/components/NewCramics'
import PopularProducts from '@/components/Popular-Products'
import JoinClub from '@/components/join-club'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Brand/>
    <NewCramics/>
    <PopularProducts/>
    <JoinClub/>
    <GetInTouch/>
    <Footer/>
    <div></div>
    </>
  )
}

export default Home