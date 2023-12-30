import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMovies:null,
        TmdbMoviesFromGpt:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!(state.showGptSearch)
            state.gptMovies=null
            state.TmdbMoviesFromGpt= null;
        },
        addGptMovies:(state,action)=>{
            const {gptMovies,TmdbMoviesFromGpt}=action.payload;
            state.gptMovies=gptMovies;
            state.TmdbMoviesFromGpt= TmdbMoviesFromGpt;
        }
    }
    
})

export const {toggleGptSearchView,addGptMovies}=gptSlice.actions;
export default gptSlice.reducer;