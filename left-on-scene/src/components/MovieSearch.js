import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../';
import MovieList from '../components/MovieList';
import MovieListHeading from '../components/MovieListHeading';
import SearchBox from '../components/SearchBox';
import RemoveFavorites from '../components/RemoveFavorites';
import MovieDisplay from '../components/MovieDisplay'
import axios from 'axios';
import { Link } from 'react-router-dom';

// const MovieSearch = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const searchMovies = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`
//       );
//       setResults(response.data.results);
//     } catch (error) {
//       console.error('Error fetching data: ', error);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search for a movie"
//       />
//       <button onClick={searchMovies}>Search</button>
//       <ul>
//         {results.map((movie) => (
//           <li key={movie.id}>{movie.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieSearch;



// const axios = require('axios');
// const options = {
//   method: 'GET',
//   url: 'https://moviesdatabase.p.rapidapi.com/titles',
//   headers: {
//     'X-RapidAPI-Key': '87e8bbac11msh2aca38f45e23940p123f6ajsn9d52274733fd',
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// // }
// const key = '15a6559706f656f8eadc5e7642675b96'

// const MovieSearch = () => {

// const [movies, setMovies] = useState([]);
// const [searchValue] = useState('');
// const [favorites, setFavorites] = useState([]);
// const getMovieRequest = async (searchValue) => {
//   const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchValue}`;
//   const response = await fetch(url);
//   const responseJson = await response.json();
//   if (responseJson.Search) {
//     setMovies(responseJson.Search);
//   }

// };
// const addFavoriteMovie = (movie) => {
//   const newFavoriteList = [...favorites, movie];
//   setFavorites(newFavoriteList);
// };

// const removeFavoriteMovie = (movie) => {
//   const newFavoriteList = favorites.filter(
//     (favorite) => favorite.imdbID !== movie.imdbID
//   );

//   setFavorites(newFavoriteList);
// };

// useEffect(() => {
//   getMovieRequest(searchValue);
// }, [searchValue]);

// return (
//   <div className="container-fluid movie-app">
//   <div className="row d-flex align-items-center mt-4 mb-4">
//     <MovieListHeading heading="Movie List" />
//     <SearchBox getMovieRequest={getMovieRequest} />
//   </div>
//      <div className='row'>
//        <MovieList
//         movies={movies}
//         // favoriteComponent={}
//         handleFavoritesClick={addFavoriteMovie}
//       />
//     </div>
//     <div className='row d-flex align-items-center mt-4 mb-4'>
//       <MovieListHeading heading='Favorites' />
//     </div>
//     <div className='row'>
//       <MovieList
//         movies={favorites}
//         handleFavoritesClick={removeFavoriteMovie}
//         favoriteComponent={RemoveFavorites}
//       />
//     </div>
//   </div>
// );}


// export default MovieSearch;

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
    getMovieRequest(searchValue).then( result => setMovies(result.results));
  }, [searchValue]);
  useEffect(() => {
    console.log("data", movies);
  },[movies]) // comment out 162-164
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <SearchBox setSearchValue={setSearchValue} getMovieRequest={getMovieRequest} />
      </div>
      <div className="row">
        <div className="col">
          <div className="search-results">
            {movies.map((movie) => (
            <Link to={`/movie/${movie.id}`}>  <MovieDisplay movie={movie}/></Link>
            ))}
          </div>
        </div>
      </div> 
      <div className='row d-flex align-items-center mt-4 mb-4'>
      </div>
      <div className='row'>
        <MovieList
          movies={favorites}
          favoriteComponent={RemoveFavorites}
        />
      </div>
    </div>
  );
}

export default MovieSearch;