import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
useEffect(()=>{
getMovieTrailer();
},[])
const getMovieTrailer=async()=>{
    const data= await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
    const json= await data.json();
    const trailerList= json.results.filter((video)=>video?.type==="Trailer");
    const trailer= trailerList?.length>0?trailerList[0]:json.results[0];
    dispatch(addTrailerVideo(trailer));

}
}

export default useMovieTrailer;