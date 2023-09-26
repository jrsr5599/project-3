
// import React, { useState } from 'react';
// import axios from 'axios';


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



const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles',
  headers: {
    'X-RapidAPI-Key': '87e8bbac11msh2aca38f45e23940p123f6ajsn9d52274733fd',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};
try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}