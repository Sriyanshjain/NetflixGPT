import React from 'react'
import MovieCard from './MovieCard'
import { svgArray } from '../utils/svgsExport';

const TopRated = ({title,movies}) => {

    const topRated= movies?.length>10?movies.slice(0,10):movies
   
  return (
    <div className='px-6'>
        <h1 className='text-xl md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll example'>
        
        
        
        
        {<div className='flex  '>
            
                {topRated?.map((movie,i)=><div className='flex h-max'><div className={(i==9?'w-32':'w-20')}>{svgArray[i]}</div><MovieCard key={movie.id} posterPath={movie.poster_path}/></div>)}
            
          
        </div>}
      
        </div>
    </div>
  )
}

export default TopRated