import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies= useSelector((store)=>store.movies?.nowPlayingMovies)
    if(!movies)
    {
      return <div className='w-full aspect-video sm:pt-[20%] md:pt-[12%] pt-[15%] lg:pt-[13%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-bold'>title</h1>
      <p className='hidden md:inline-block py-6 sm:text-sm lg:text-lg  md:w-3/4 lg:w-1/2'></p>
      <div className='flex mt-4'>
        
      <button className='bg-zinc-500 text-black bg-white px-4 py-1  md:px-7 md:py-2 bg-opacity-80 hover:bg-opacity-100 rounded-md ' >
       
           <span className=' font-bold text-sm md:text-lg'>Play</span>
          </button>
          <button className='bg-zinc-500 ml-4 text-white bg-opacity-50 rounded-md  px-4  md:px-7 md:py-2 '>
           
           <span className='  font-bold text-sm md:text-lg'>More Info</span>
          </button>

      </div>
  </div>
    }
    const {original_title,overview,id}=movies[0];
  return (
    <div className="pt-[30%] bg-black md:pt-0">
        <VideoTitle title={original_title} overview={overview } movieId={id}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer