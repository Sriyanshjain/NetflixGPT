import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon, ChevronUpIcon,ChevronLeftIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const {showGptSearch} = useSelector((store) => store.gpt);
  const [showSignOut, setShowSignOut] = useState(false);
  const {pathname}=useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className={pathname.startsWith("/movie")?"hidden":"block"}>
    <div className=" px-8 py-2 bg-gradient-to-b from-black z-30 flex flex-col md:flex-row md:justify-between backdrop-blur-xl md:backdrop-blur-none fixed top-0 w-full">
      <img className="w-44 mx-auto md:mx-0 cursor-pointer" src={NETFLIX_LOGO} alt="logo"  onClick={()=>navigate("/")}/>
      {user && (
        <div className="flex flex-row p-2 md:mr-4 mx-auto ">
          <div className=' cursor-pointer p-2 m-2 text-white text-sm sm:text-lg'><a target='_blank' href='https://github.com/Sriyanshjain' className=''>About</a></div>
          <div
            className="flex cursor-pointer justify-center md:justify-around p-2 m-2 gap-2"
            onClick={handleGptSearchClick}
          >{
            showGptSearch?<><ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white block mt-1 " /><p className="text-white text-sm sm:text-lg">Back to home</p></>:<><MagnifyingGlassIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white block mt-1 " />
            <p className="text-white text-sm sm:text-lg">Search</p></>
          }
            
          </div>
          <div className="relative inline-block group ml-2 cursor-pointer">
            <div
              className="flex justify-center md:justify-around transition duration-300"
              onClick={() => setShowSignOut((prev) => !prev)}
            >
              <img
                className="p-2 w-12 h-12 sm:w-16 sm:h-16 "
                src={USER_AVATAR}
                alt="Use avatar"
                
              />
              <div className="mt-4">
                {showSignOut ? (
                  <ChevronDownIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white block " />
                ) : (
                  <ChevronUpIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white " />
                )}
              </div>
            </div>
            {showSignOut && (
              <div className="bg-black rounded-md absolute w-20 sm:w-24 cursor-pointer text-white p-3 mt-4">
                <ul>
                  <li className="text-sm sm:text-lg " onClick={handleSignOut}>Sign out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Header;
