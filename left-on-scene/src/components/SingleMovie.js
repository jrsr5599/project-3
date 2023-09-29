// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import MovieDisplay from './MovieDisplay';
// const key = '15a6559706f656f8eadc5e7642675b96';

// const SingleMovie = ({ match }) => {
//   const [movie, setMovie] = useState(null);
//   const movieId = match.params.id;

//   useEffect(() => {
//     const getMovieById = async () => {
//       const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`;
//       const response = await fetch(url);
//       const responseJson = await response.json();
//       setMovie(responseJson);
//     };

//     getMovieById();
//   }, [movieId]);

//   if (!movie) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//       <img
//         src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//         alt={movie.title}
//       />
//     </div>
//   );
// };

// export default SingleMovie;

////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDisplay from '../components/MovieDisplay';
import FadeIn from "react-fade-in/lib/FadeIn";


const key = '15a6559706f656f8eadc5e7642675b96';
const getMovieVideos = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return responseJson.results;
  };

const SingleMovie = () => {
  const { movieid } = useParams(); // Access the movieid parameter from the URL
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      setMovie(responseJson);
      const videos = await getMovieVideos(movieid);
      if (videos.length > 0) {
        const videoKey = videos[0].key;
        setTrailerUrl(`https://www.youtube.com/embed/${videoKey}`);
      }
    };

    

    getMovieById();
  }, [movieid]);

  const containerStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    display: "inline-block",
    
};

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (

        
    <FadeIn delay={500} transitionDuration={800}>
        
    <div style={containerStyle} className="movie-app">
      <h1 >{movie.title}</h1>
     
      <img 
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}/>  
                </div>       
        <div className="movie-app">
          <iframe
            width="560"
            height="315"
            src={trailerUrl}
            title="Trailer"
            allowFullScreen
          />

    </div>
  
        <div className="movie-app"> <p > {movie.overview}</p>
        </div>
        
        

        
        
        </FadeIn>

    
  );
};

export default SingleMovie;
