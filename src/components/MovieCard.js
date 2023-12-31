import React from 'react'
import { TMDB_CDN_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
const MovieCard = ({posterPath,movieId}) => {

  if(!posterPath)
  return
  return (
    <div className='w-36 md:w-48 pr-4 aspect-[2/3] cursor-pointer'>
        <Link to={`/movie/${movieId}`}><img alt='Movie card' src={TMDB_CDN_URL+'w500/'+posterPath}></img></Link>
    </div>
  )
}

export default MovieCard