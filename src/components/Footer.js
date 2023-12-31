import React from 'react'
import { NETFLIX_LOGO } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate= useNavigate();
  return (
    <div className='bg-neutral-900 w-screen pt-8 pb-4 px-24'>
        <div className='flex justify-between'>
              <img className="md:w-44 w-30 mx-auto hidden md:inline-block md:mx-0 cursor-pointer" src={NETFLIX_LOGO} alt="logo"  onClick={()=>navigate("/")}/>

        <div className='flex justify-center mx-auto md:mx-0 gap-2 text-neutral-400 pt-4 text-lg md:text-xl  '>
            <div className='hover:underline cursor-pointer'><a target='_blank' href='https://github.com/Sriyanshjain' className='hover:text-red-500'>About</a></div>
            
            <div className='hover:underline cursor-pointer'><a target='_blank' href='https://www.linkedin.com/in/sriyansh-jain-35b876157/' className='hover:text-red-500'>Contact</a></div>
        </div>
        </div>
        <hr className='border-t border-neutral-800  '/>
        <h3 className='text-center  text-neutral-400  p-5'>Crafted by <span className='text-gray-50' ><a target='_blank' href='https://www.linkedin.com/in/sriyansh-jain-35b876157/' className='hover:text-red-500'>Sriyansh Jain</a></span></h3>
        
    </div>
  )
}

export default Footer