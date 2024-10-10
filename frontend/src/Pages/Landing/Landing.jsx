import React from 'react'
import { Cover } from '../../Components/Cover'
import { StarsBackground } from '../../Components/StarsBackground.js'
import { ShootingStars } from '../../Components/ShootingStars.js'

function Landing() {
  return (
    // <div className="h-screen flex items-center justify-center bg-black">
    // <BackgroundLines className="flex bg-black items-center justify-center w-full flex-col px-4">
    <>
    {/* <BackgroundGradientAnimation className="flex bg-neutral-900 absolute h-screen w-full flex-col items-center justify-center"> </BackgroundGradientAnimation> */}
      {/* This will render the Cover component with sparkles and hover effects */}
      <div className='flex z-10 flex-col absolute inset-0  justify-center items-center'>
      <h1 className="text-6xl md:text-6xl lg:text-8xl font-bold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-white">
      Barter Trading System
      </h1>
      <h1 className=' text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl pb-5 mx-auto text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-white '>
      Trade items at  <Cover className="pb-2">lightning</Cover> speed
      </h1>
        </div>
        <ShootingStars></ShootingStars>
        <StarsBackground></StarsBackground>
        </>
     
    // </BackgroundLines>
    // </div>
  )
}   

export default Landing
