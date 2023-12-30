import React, { useRef, useState } from "react";
import { client, openAiApi } from "../utils/openAi";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const searchMovieTmdb=async(movie)=>{
    const data=await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`,API_OPTIONS)
    const json= await data.json();
    return json.results;
  }
  const handleGptSearchClick = async () => {
    if (searchText.current.value === "") {
      setErrorMessage("Please provide a valid input");
      return;
    }
    const GptSearchQuery =
      "You are a movie recommendation system and suggest some movies for the search query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Andaaz Apna Apna,Inception,Hera Pheri,Padosan,De Dana Dan ";

    const response = await openAiApi.createChatCompletion({
      messages: [
        {
          role: "system",
          content:
            "You are a movie recommendation system and suggest some movies for the search query:" +
            GptSearchQuery +
            "Only give me names of 5 movies, comma separated .",
        },
      ],
    });
    if (!response?.data) {
      setErrorMessage(
        "An unexpected problem has occured. Please try after some time "
      );
      return;
    }

    const result = response?.data?.choices[0]?.message?.content.split(",");
    setErrorMessage(null);
    console.log(result);
  };
  return (
    <div className="w-full flex justify-center">
      <form
        className="grid grid-cols-9 w-9/12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          placeholder="What would you like to watch today ?"
          className="bg-neutral-800 rounded-lg py-6 px-3 col-span-7 mr-1 outline-none text-white "
        />
        <button
          className="bg-red-600 text-white p-4 rounded-lg ml-1 col-span-2 font-bold "
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
      {errorMessage && <p className="text-red-600 text-lg">{errorMessage}</p>}
    </div>
  );
};

export default GptSearchBar;
