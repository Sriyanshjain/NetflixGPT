import React from 'react'
import { TMDB_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-56 pr-4 aspect-[2/3]'>
        <img alt='Movie card' src={TMDB_CDN_URL+'w500/'+posterPath}></img>
    </div>
  )
}

export default MovieCard