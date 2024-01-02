import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import useMovieWatch from "../hooks/useMovieWatch";
import { addWatchMovie } from "../utils/moviesSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";

const WatchMovie = () => {
  const { movieId } = useParams();
  useMovieWatch(movieId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const youtubeKey = useSelector((store) => store.movies?.watchMovie);
  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/movie/" + movieId);
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleBackToHome = () => {
    dispatch(addWatchMovie(null));
    navigate("/browse");
  };

  return (
    <div className="h-screen">
      <div className="bg-black  w-full p-4">
        <div className=" cursor-pointer mt-4">
          <ChevronLeftIcon className="h-6 w-6 text-white inline-block  " />
          <p
            className="text-white text-lg inline-block  ml-2"
            onClick={handleBackToHome}
          >
            Back to home
          </p>
        </div>
      </div>
      <div className="w-full h-[90%]  ">
        <iframe
          className="w-full h-full  object-cover aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            youtubeKey?.key +
            "?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
          }
          title="YouTube video player"
          loading="lazy"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="bg-black h-[10%]"></div>
    </div>
  );
};

export default WatchMovie;
