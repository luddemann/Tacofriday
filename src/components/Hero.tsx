import React from 'react'
import ActionButton from './common/ActionButton'

import Tacodinner from '../assets/images/tacodinner.svg'
import Tacodinner2 from '../assets/images/tacodinner2.svg'

interface Props {
  onClick: () => void,
  isLoading: boolean,
}

const Hero = ({onClick, isLoading }: Props) => {
  return (
    <div className='h-auto lg:pt-20 pb-24'>
      <div className='lg:flex items-center'>
        <div
          className='mx-auto text-center lg:text-left'
          data-aos='fade-down-right'
          data-aos-duration='1000'
        >
          <h1 className='text-5xl md:text-6xl lg:text-8xl font-hero font-black text-gray-700 uppercase leading-none transition duration-200'>
              <span className='text-orange-500'> Taco </span> 
            Friday
          </h1>
          <img
            className='w-full h-64 sm:h-auto sm:w-3/4 mx-auto lg:hidden'
            src={Tacodinner}
            alt='Taco Dinner Illustration'
          />
          <p className='text-sm font-medium md:text-base sm:w-3/4 md:w-5/6 inline-block text-gray-600 my-8 mx-auto'>
            Spice up your friday night tacos! <br /> Our simple yet genius
            taco-generator helps you construct the taco of your dreams!
          </p>
          <ActionButton onClick={onClick} isLoading={isLoading} />
        </div>
        <div className='hidden lg:block lg:w-full'>
          <img
            src={Tacodinner2}
            alt='Taco Dinner Illustration'
            data-aos='fade-up-left'
            data-aos-duration='1000'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
