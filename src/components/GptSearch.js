import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
  return (
    <div className='bg-gradient-to-b from-blue-950 h-screen bg-black w-screen '>
      <h2 className='z-12 text-center text-white text-5xl pt-[10%]  font-bold'>Can't decide what to watch? Tell us your mood !</h2>
      <div className='pt-[5%] text-center'>
      <GptSearchBar/>
      </div>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch;