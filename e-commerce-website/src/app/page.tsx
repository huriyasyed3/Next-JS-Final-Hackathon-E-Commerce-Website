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
    
 const response = await fetch('https://hackathon-apis.vercel.app/api/products')
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