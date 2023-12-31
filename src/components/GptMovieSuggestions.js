import React from 'react'
import MovieList from './MovieList'
import {  useSelector } from 'react-redux'


const GptMovieSuggestions = () => {
    const {gptMovies,TmdbMoviesFromGpt}=useSelector((store)=>store.gpt)
  return (
    <div className=' min-h-screen bg-[#0c132c]'>
        {gptMovies && <div className='mx-2 mt-2 p-2 '>
        {
            gptMovies.map((movie,index)=><MovieList key={movie.id} title={movie} movies={TmdbMoviesFromGpt[index]}/>)
        }
        </div>}
        
    </div>
  )
}

export default GptMovieSuggestions