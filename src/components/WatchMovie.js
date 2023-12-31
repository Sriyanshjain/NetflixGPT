import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import useMovieWatch from '../hooks/useMovieWatch';

const WatchMovie = () => {
    const { movieId } = useParams();
    console.log(movieId)
    useMovieWatch(movieId);
    const youtubeKey=useSelector((store)=>store.movies?.watchMovie);
    

    
      return (
        <div>
            <div className='bg-black  w-full p-4'>
            <div
            className=" cursor-pointer mt-4"
           
          >
            <Link to="/browse">
            <ChevronLeftIcon className="h-6 w-6 text-white inline-block  " />
            <p className="text-white text-lg inline-block  ml-2">Back to home</p>
            </Link>
            
          </div>
            </div>
        <div className='w-full h-full '>
        
         <iframe className='w-full h-full  object-cover aspect-video' src={"https://www.youtube.com/embed/"+youtubeKey?.key +"?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"}
         title="YouTube video player"  
         loading="lazy"
         allowFullScreen
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         >
    
         </iframe>
        </div>
        </div>
      )
  
}

export default WatchMovie