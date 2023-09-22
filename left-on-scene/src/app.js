import React, { useState, useEffect } from 'react';
import './app.css';
import LeftonScene from './components/LeftonScene';

const App = () => {
  const [movies, setMovies] = useState([]);

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
      <LeftonScene/>
    </div>
  );
};

export default App;
