import React from 'react'
import videoBg from '.././assets/video.mp4'

const Header = () => {
  return (
    <div className='text-white w-full h-screen z-0'>
    <video src={videoBg}  className='h-full w-full object-cover' autoPlay loop muted></video>
    <div className='absolute w-full h-full mt-[-750px] flex flex-col justify-center items-center text-white'>
    <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>HAZIRSIN, HADİ BAŞLAYALIM!</h1>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold'>Zihnen, ruhen ve bedenen daha iyi bir yaşam için adım at!</p>
          <button className='bg-[#DF1D2F] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Aramıza katıl!</button>
      </div>
    </div>
     
  </div>
  )
}

export default Header 
