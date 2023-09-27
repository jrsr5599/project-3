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
// import 'dotenv/config'
// console.log (process.env.SECRET_KEY)
// const key 


const App = () => {
	return (
		<Router>
<div>
<NavBar/>


			  <Routes>

				<Route
				  path="/Login" 
				  element={<Login/>}> 
				 </Route> 

			  </Routes>
			  <MovieSearch/>
		  </div>
		</Router>
	)};

export default App;