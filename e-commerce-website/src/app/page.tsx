import Brand from '@/components/brand'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import JoinClub from '@/components/join-club'
import NewCramics from '@/components/NewCramics'
import PopularProducts from '@/components/Popular-Products'
import React from 'react'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <Brand/>
    <NewCramics/>
    <PopularProducts/>
    <JoinClub/>
    <Footer/>
    <div></div>
    </>
  )
}

export default Home