import Header from "./Header";
import React, { useState ,useRef} from 'react'
import { checkIfDataValid } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
const Login=()=>{

    const [isSignInForm, setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const name= useRef(null);
    const email=useRef(null);
    const password= useRef(null);
    const handleButtonClick=()=>{
      if(!isSignInForm && name.current.value=="")
      {setErrorMessage("Please tell us your name");
      return;
    }
     const error=checkIfDataValid(email.current.value,password.current.value);
      setErrorMessage(error);
      if(error)
      return;
      if(!isSignInForm )
      {
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +"-"+errorMessage);
    console.log(errorCode +"-"+errorMessage);
  });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode.endsWith("invalid-credential"))
          setErrorMessage("User Not Found");
        });
      }
    }
    const toggleSignInForm=(e)=>{
       
        setIsSignInForm(prev=>!prev);
    };
return <div>
    <Header/>
    <form onSubmit={(e)=>e.preventDefault()}className='absolute rounded-md mx-auto my-auto top-1/4  left-0 right-0 bg-black bg-opacity-80 px-16 text-white w-3/12'>
               <p className='text-4xl pt-8 pb-4 mt-4 mb-3 font-bold '>{isSignInForm?"Sign in":"Sign up"}</p>
               {!isSignInForm && <input type="text" placeholder='Name' ref={name} className='m-2 bg-zinc-800 outline-none rounded-md p-4 w-full' />}
                <input type="text" placeholder='Email address' ref={email} className='m-2 bg-zinc-800 outline-none rounded-md p-4 w-full' />
                <input type="password" placeholder='Password' ref={password} className='m-2  bg-zinc-800 outline-none rounded-md p-4 w-full ' />
                <p className="text-md text-red-800 m-2 p-2">{errorMessage}</p>
                <button className="rounded-md bg-red-600 m-2 mt-4 w-full p-4" onClick={handleButtonClick} >{isSignInForm?"Sign in":"Sign up"}</button>
                <p className=' pt-8 pb-4 mt-4 mb-3 px-2 cursor-pointer ' onClick={toggleSignInForm}><span className='text-gray-400'>{isSignInForm?"New to Netflix?":"Already a user?"} </span>{isSignInForm?"Sign up now !":"Sign in"} </p>
            </form>
</div>
}
export default Login;