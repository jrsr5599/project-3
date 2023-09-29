import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
// import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
// import RemoveFavorites from './components/RemoveFavorites';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/LeftonScene';
import Layout from './components/Layout';
import LeftonScene from './components/LeftonScene'
import singleMovie from './components/singleMovie';

// import 'dotenv/config'
// console.log (process.env.SECRET_KEY)
// const key 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<LeftonScene />} />
          <Route path="/Login" element={<Login />}/>
          <Route path="/Movie/:movieid" element={<singleMovie/>} />
		  <Route path="/Home" element={<MovieSearch />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;