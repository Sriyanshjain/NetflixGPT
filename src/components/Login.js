import Header from "./Header";
import React, { useState ,useRef} from 'react'
import { checkIfDataValid } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useDispatch } from "react-redux";
import { NETFLIX_BG } from "../utils/constants";
const Login=()=>{

    const [isSignInForm, setIsSignInForm]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const name= useRef(null);
    const email=useRef(null);
    const password= useRef(null);
    const dispatch=useDispatch();
    const handleButtonClick=()=>{
      if(!isSignInForm && name.current.value=="")
      {setErrorMessage("Please tell us your name");
      return;
    }
    const error=checkIfDataValid(email.current.value,password.current.value);
    setErrorMessage(error);
    if(error)
    {
      return;
    }
    
     
      if(!isSignInForm )
      {
     
//sign up logic
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value
    }).then(() => {
      // Profile updated!
      setErrorMessage("Sign up successful ! Try signing in.")
      const {uid,email,displayName}=auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode.endsWith("email-already-in-use"))
    setErrorMessage("User already Exists. Try signing in");
    else
    setErrorMessage(errorCode +"--->"+errorMessage);
  });
      }
      else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode.endsWith("invalid-credential"))
          setErrorMessage("Invalid user credential");
          else
          setErrorMessage(errorCode +"--->"+errorMessage);
        });
      }
    }
    const toggleSignInForm=(e)=>{
        setErrorMessage(null)
        setIsSignInForm(prev=>!prev);
    };
return <div>
   <Header/>
  <div className='absolute '>
        <img className="min-h-screen w-screen object-cover" src={NETFLIX_BG} alt="netflix bg" />
        </div>
   
    <form onSubmit={(e)=>e.preventDefault()}className='absolute rounded-md mx-auto my-auto top-28 sm:top-1/4  left-0 right-0 bg-black bg-opacity-80 px-10 sm:px-16 text-white w-10/12 sm:w-5/12 xl:w-3/12 '>
               <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-8 pb-4 my-3 font-bold '>{isSignInForm?"Sign in":"Sign up"}</p>
               {!isSignInForm && <input type="text" placeholder='Name' ref={name} className='m-2 bg-zinc-800 outline-none rounded-md text-xs sm:text-sm md:text-lg lg:text-xl p-4 w-full' />}
                <input type="text" placeholder={isSignInForm?'Email address':"Enter email"} ref={email} className='m-2 bg-zinc-800 outline-none rounded-md p-4 w-full text-xs sm:text-sm md:text-lg lg:text-xl' />
                <input type="password" placeholder={isSignInForm?'Password':"Set password"}ref={password} className='m-2  bg-zinc-800 outline-none rounded-md p-4 w-full text-xs sm:text-sm md:text-lg lg:text-xl ' />
                <p className={ isSignInForm?"hidden":"text-xs text-zinc-600  p-4 inline-block"}>Choose a password with a combination of capital,small alphabets and special characters.</p>
                { errorMessage && <p className="text-md text-red-800 m-2 p-2">{errorMessage}</p>}
                <button className="rounded-md bg-red-600 m-2 mt-3 sm:mt-4 w-full p-4" onClick={handleButtonClick} >{isSignInForm?"Sign in":"Sign up"}</button>
                <p className=' pt-8 pb-4 sm:mt-3  px-2 cursor-pointer text-xs sm:text-sm md:text-lg lg:text-xl' onClick={toggleSignInForm}><span className='text-gray-400'>{isSignInForm?"New to Netflix?":"Already a user?"} </span>{isSignInForm?"Sign up now!":"Sign in"} </p>
            </form>
</div>
}
export default Login;