import React, { useState } from 'react'

const Header = () => {

    const [isSignInForm, setIsSignInForm]=useState(true);
    const toggleSignInForm=(e)=>{
        e.preventDefault();
        setIsSignInForm(prev=>!prev);
    };

  return (
    <div className=''>
        <div className='bg-black bg-opacity-50  '>
        <img className="absolute " src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix bg" />
        </div>
        <img className='w-52 mx-8 py-1 absolute' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />


            <form className='absolute rounded-md mx-auto my-auto top-1/4  left-0 right-0 bg-black bg-opacity-80 px-16 text-white w-3/12'>
               <p className='text-4xl pt-8 pb-4 mt-4 mb-3 font-bold '>{isSignInForm?"Sign in":"Sign up"}</p>
               {!isSignInForm && <input type="text" placeholder='Name' className='m-2 bg-zinc-800 outline-none rounded-md p-4 w-full' />}
                <input type="text" placeholder='Email address' className='m-2 bg-zinc-800 outline-none rounded-md p-4 w-full' />
                <input type="password" placeholder='Password' className='m-2  bg-zinc-800 outline-none rounded-md p-4 w-full ' />
                <button className="rounded-md bg-red-600 m-2 mt-4 w-full p-4" >{isSignInForm?"Sign in":"Sign up"}</button>
                <p className=' pt-8 pb-4 mt-4 mb-3 px-2 cursor-pointer ' onClick={toggleSignInForm}><span className='text-gray-400'>{isSignInForm?"New to Netflix?":"Already a user?"} </span>{isSignInForm?"Sign up now !":"Sign in"} </p>
            </form>
     
    </div>
  )
}

export default Header