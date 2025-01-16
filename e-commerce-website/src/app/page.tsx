import Brand from '@/components/brand'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import NewCramics from '@/components/NewCramics'
import PopularProducts from '@/components/Popular-Products'
import JoinClub from '@/components/join-club'
import GetInTouch from '@/components/GetInTouch'
import React from 'react'
import Data from './data/data'
const Home = async () => {
    
 const response = await fetch('https://6782b04bc51d092c3dd07634.mockapi.io/data')
 const data = await response.json();  
 console.log(data);
 
 return (
  
   <div>
      
     {data.map((info: Data) => (
    <Data info={info} key={info.id} />
  ))}
      
     
   

 
  
    
    <HeroSection/>
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