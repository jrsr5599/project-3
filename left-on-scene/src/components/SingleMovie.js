import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieDisplay from './MovieDisplay';
const key = '15a6559706f656f8eadc5e7642675b96';

const SingleMovie = ({ match }) => {
  const [movie, setMovie] = useState(null);
  const movieId = match.params.id;

  useEffect(() => {
    const getMovieById = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovie(responseJson);
    };

    getMovieById();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
    </div>
  );
};

export default SingleMovie;
