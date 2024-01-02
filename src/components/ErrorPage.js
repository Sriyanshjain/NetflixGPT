import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { NETFLIX_BG } from '../utils/constants';

const ErrorPage = () => {


    const navigate=useNavigate()
    const handleBackToHome=()=>{
       //[] dispatch(addWatchMovie(null));
        navigate("/");
      }
  return (
    <div className=''>
      <div className='absolute '>
        <img className="min-h-screen w-screen object-cover" src={NETFLIX_BG} alt="netflix bg" />
        </div>
        <div className='absolute rounded-md mx-auto my-auto top-28 sm:top-1/4  left-0 right-0 bg-black bg-opacity-80 px-10 sm:px-16 text-white w-10/12 sm:w-5/12 xl:w-3/12 '>
               <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-8 pb-4 my-3 font-bold '>You ran into something unexpected !</p>

                <button className="rounded-md bg-red-600 mx-2 my-3 sm:mt-4 w-full p-4" onClick={handleBackToHome} >Take me home</button>
               </div>
        
        

    </div>
  )
}

export default ErrorPage