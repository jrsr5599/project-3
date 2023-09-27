import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
// import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import NavBar from './components/NavBar';
// import 'dotenv/config'
// console.log (process.env.SECRET_KEY)
// const key 


const App = () => {
	return (
		<Router>
<div>
<NavBar/>
	<MovieSearch/>

	<AddFavorites/>

			  <Routes>
				<Route 
				  path="/" 
				  element={<Home />} 
				/>
				<Route 
				  path="/login" 
				  element={<Login />} 
				/>
			
				{/* <Route 
				  path="*" 
				  element={<NoMatch />} 
				/> */}
			  </Routes>

		  </div>
		</Router>
	)};

export default App;