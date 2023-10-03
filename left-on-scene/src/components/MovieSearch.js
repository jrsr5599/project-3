import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../';
import MovieList from '../components/MovieList';
import MovieListHeading from './ReviewForm';
import SearchBox from '../components/SearchBox';
import RemoveFavorites from '../components/RemoveFavorites';
import MovieDisplay from '../components/MovieDisplay';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';

const key = '15a6559706f656f8eadc5e7642675b96';
const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const getMovieRequest = async (searchValue) => {
    console.log('getMovieRequest called with searchValue:', searchValue); // Debugging log
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchValue}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(response);
    return responseJson;
  };
  useEffect(() => {
    console.log('useEffect called with searchValue:', searchValue); // Debugging log
    getMovieRequest(searchValue).then((result) => setMovies(result.results));
  }, [searchValue]);
  useEffect(() => {
    console.log('data', movies);
  }, [movies]); 
  return (
    <FadeIn>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <SearchBox
            setSearchValue={setSearchValue}
            getMovieRequest={getMovieRequest}
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="search-results">
              {movies.map((movie) => (
                <Link to={`/movie/${movie.id}`}>
                  <MovieDisplay movie={movie} />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center mt-4 mb-4"></div>
        <div className="row">
          <MovieList movies={favorites} favoriteComponent={RemoveFavorites} />
        </div>
      </div>
    </FadeIn>
  );
};

export default MovieSearch;
