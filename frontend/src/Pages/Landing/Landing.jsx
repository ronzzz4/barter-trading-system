import React from 'react'
import { Cover } from '../../Components/Cover'
import { BackgroundLines } from '../../Components/BackgroundLines'

function Landing() {
  return (
    // <div className="h-screen flex items-center justify-center bg-black">
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      {/* This will render the Cover component with sparkles and hover effects */}
      <div className="flex-grow flex-col flex items-center justify-center">
      <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-white">
      Barter Trading System
      </h1>
      <h1 className=' text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl pb-5 mx-auto text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-white '>
      Trade items at lightning <Cover className="pb-2">speed</Cover>
      </h1>
        
      </div>
    </BackgroundLines>
    // </div>
  )
}   

export default Landing
