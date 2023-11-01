import React from 'react'
import middle from '../assets/middle.svg'
import leftLast from '../assets/left-last.svg'
import leftSecond from '../assets/left-second.svg'
import rightSecond from '../assets/right-second.svg'
import rightLast from '../assets/right-last.svg'
const HeroImg = () => {
  return (
    <div>
      <div className='flex justify-center'>
            <img data-aos="fade-up" className=' animate-pulse translate-x-2 -z-40' src={leftLast} alt="" />
            <img data-aos="fade-up" className='border-red-500 border-solid z-30' src={leftSecond} alt="" />
            <img data-aos="fade-up" className='border-red-500 border-solid z-20' src={middle} alt="" />
            <img data-aos="fade-up" className='border-red-500 border-solid z-10' src={rightSecond} alt="" />
            <img data-aos="fade-up" className='border-red-500 border-solid z-0' src={rightLast} alt="" />
          </div>
    </div>
  )
}

export default HeroImg