import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import Footer from './Footer';

const GptSearch = () => {
  return (
    <div className='bg-gradient-to-b from-blue-950 h-screen bg-black w-screen  '>
      <h2 className='z-12 text-center text-white text-xl md:text-5xl sm:pt-[50%] pt-[55%] md:pt-[10%]  font-bold'>Can't decide what to watch? Tell us your mood !</h2>
      <h4 className='z-12 text-center text-white text-lg mt-6  '>Try our AI-powered search</h4>
      <div className='pt-[5%] text-center'>
      <GptSearchBar/>
      </div>
      <GptMovieSuggestions/>
      <Footer/>
    </div>
  )
}

export default GptSearch;