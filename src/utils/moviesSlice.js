import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        topRatedMovies:null,
        trailerVideo:null,
        watchMovie:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
         state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
           },
           addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload;
           },
           addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
           },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addWatchMovie:(state,action)=>{
            state.watchMovie=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRatedMovies,addWatchMovie}=moviesSlice.actions;
export default moviesSlice.reducer;