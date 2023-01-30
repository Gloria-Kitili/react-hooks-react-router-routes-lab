import React from "react";
import { movies } from "../data";

function Movies() {

  const movieData = movies.map((movie) =>(
    <div key = {movie.title}>
      <h1>Puss In Boots: {movie.title}</h1>
      <p>ShowTime: {movie.time} minutes</p>
      <ul>
        {movie.genres.map((genre) =>(
         <li key = {genre}>{genre}</li>
       ))}
      </ul>
    </div>
  ))
  return(
     <div>
      <h1>Movies Page</h1>
      {movieData}
      </div>
  )
}

export default Movies;
