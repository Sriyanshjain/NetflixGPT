import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video sm:pt-[20%] pt-[15%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl sm:text-3xl lg:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 sm:text-sm lg:text-lg md:w-3/4 lg:w-1/2'>{overview}</p>
        <div className='flex mt-4'>
        <button className='bg-zinc-500 text-black bg-white px-4 py-1  md:px-7 md:py-2 bg-opacity-80 hover:bg-opacity-100 rounded-md '>
             <PlayIcon className='inline-block px-1 p  w-7 h-7 md:w-10 md:h-10'/>
             <span className=' font-bold text-sm md:text-lg'>Play</span>
            </button>
            <button className='bg-zinc-500 ml-4 text-white bg-opacity-50 rounded-md  px-4  md:px-7 md:py-2 '>
             <InformationCircleIcon className='inline-block px-1  w-7 h-7 md:w-10 md:h-10'/>
             <span className='  font-bold text-sm md:text-lg'>More Info</span>
            </button>

        </div>
    </div>
  )
}

export default VideoTitle