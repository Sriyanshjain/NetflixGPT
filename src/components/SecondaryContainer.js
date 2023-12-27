import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import TopRated from './TopRated';

const SecondaryContainer = () => {
    const movies=useSelector((store)=>store.movies);
  return (
   movies && <div className='bg-neutral-900'>
        <div className=' -mt-52 pl-12 relative z-20  '>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        
        <TopRated title={"Top Rated"} movies={movies.topRatedMovies}/>
        </div>
    </div>
  )
}

export default SecondaryContainer;