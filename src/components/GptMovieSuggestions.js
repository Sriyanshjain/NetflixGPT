import React from 'react'
import MovieList from './MovieList'
import {  useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
    const {gptMovies,TmdbMoviesFromGpt}=useSelector((store)=>store.gpt)
  return (
    <div className='  bg-[#0c132c]'>
        {gptMovies && <div className='m-2 p-2 '>
        {
            gptMovies.map((movie,index)=><MovieList title={movie} movies={TmdbMoviesFromGpt[index]}/>)
        }
        </div>}
    </div>
  )
}

export default GptMovieSuggestions