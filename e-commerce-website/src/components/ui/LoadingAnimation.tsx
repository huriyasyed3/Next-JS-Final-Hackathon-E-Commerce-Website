"use client"
import dynamic from 'next/dynamic'

import loadingAnimation from "../../../public/loading-animation.json"; 
const Lottie = dynamic(() => import('lottie-react').then((mod) => mod), {
  ssr: false
})
export default function LoadingComponent() {
   
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Lottie
       animationData={loadingAnimation }
        loop={true} //  repeat Animation
        className="w-64 h-64"
      />
      <p className="mt-4 text-lg font-medium text-gray-700">
        Loading, please wait...
      </p>
    </div>
  );
}
