import React from 'react'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { PlayIcon } from '@heroicons/react/24/solid'
const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex mt-4'>
        <button className='bg-zinc-500 text-black bg-white px-3 py-1  hover:bg-opacity-80 rounded-md '>
             <PlayIcon className='inline-block px-2   w-10 h-10'/>
             <span className=' font-bold text-lg'>Play</span>
            </button>
            <button className='bg-zinc-500 ml-4 text-white bg-opacity-50 rounded-md px-3 py-1'>
             <InformationCircleIcon className='inline-block px-2  w-10 h-10'/>
             <span className='  font-bold text-lg'>More Info</span>
            </button>

        </div>
    </div>
  )
}

export default VideoTitle