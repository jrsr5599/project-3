import React from "react";

const MovieDisplay = ( {movie} ) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    return (
        <div>
        <h1>{movie.title}</h1>
        <a href="#" target="_blank">
          <img src={moviePosterUrl} alt={movie.title} />
        </a>
      </div>
    )
}

export default MovieDisplay