import React from 'react'
import { TMDB_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath)
  return
  return (
    <div className='w-36 md:w-48 pr-4 aspect-[2/3] cursor-pointer'>
        <img alt='Movie card' src={TMDB_CDN_URL+'w500/'+posterPath}></img>
    </div>
  )
}

export default MovieCard