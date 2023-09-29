import React from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

const MovieDisplay = ( {movie} ) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    // const movieDetailUrl = `https://www.themoviedb.org/movie/${movie.id}`;
    const containerStyle = {
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
    };
    return <FadeIn delay={500} transitionDuration={800}>
        <div style={containerStyle}><h1>{movie.title}</h1>
        <img src={moviePosterUrl} alt={movie.title} /></div>
        {/* <div style={containerStyle}>
          <h1>
            <a href={movieDetailUrl} target="_blank" rel="noopener noreferrer">
              {movie.title}
            </a>
          </h1>
          <a href={movieDetailUrl} target="_blank" rel="noopener noreferrer">
            <img src={moviePosterUrl} alt={movie.title} />
          </a>
        </div> */}
        </FadeIn>
    }
    

export default MovieDisplay