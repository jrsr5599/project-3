import React, { useState, useEffect } from 'react';
import './app.css';
import LeftonScene from './components/LeftonScene';
import MovieList from '.components/MovieList';
import SearchBox from '/components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const getMovieRequest = async () => {
  const url = ' ';
  
  const response = await fetch(url);
  const reponseJson = await response.json();

  if (responseJson.Search) {
    setMovies(responseJson.Search);
  }
};

useEffect(() => {
  getMovieRequest();
}, []);


  return (
    <div className="LeftonScene">
      <MovieList heading = 'Movies' />
      <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      <LeftonScene/>
    </div>
  );
};

export default App;
