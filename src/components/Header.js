import { useDispatch, useSelector } from "react-redux";
import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/24/solid";
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate= useNavigate();
  const dispatch=useDispatch();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  },[])
  return (
    <div className="flex justify-between w-full bg-black bg-opacity-50">
      <img
        className="w-52 mx-8 py-1 z-20"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

{user && <div className="relative inline-block group p-2 mr-4s cursor-pointer">
  <div className="flex justify-around transition duration-300">
    <img
      className="p-2 w-16 h-16"
      src="https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
      alt="Netflix Logo"
    />
    <div className="mt-4">
      <ChevronDownIcon className="h-6 w-6 text-white block group-hover:hidden" />
      <ChevronUpIcon className="h-6 w-6 text-white hidden group-hover:block " />
    </div>
  </div>
  <div className="bg-black rounded-md absolute cursor-pointer text-white hidden group-hover:block p-3 mt-4">
    <ul>
      <li onClick={handleSignOut}>Sign out</li>
    </ul>
  </div>
</div>}

    </div>
  );
};

export default Header;
