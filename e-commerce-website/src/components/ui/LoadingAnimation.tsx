"use client"

import Lottie from "lottie-react";
import loadingAnimation from "../../../public/loading-animation.json"; // File ka path

export default function LoadingComponent() {
   
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <Lottie
       animationData={loadingAnimation }
        loop={true} // Animation repeat karega
        className="w-64 h-64"
      />
      <p className="mt-4 text-lg font-medium text-gray-700">
        Loading, please wait...
      </p>
    </div>
  );
}
