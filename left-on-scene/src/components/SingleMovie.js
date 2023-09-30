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
  const [showModal, setShowModal] = useState(false); // Add state for modal visibility

  const handleAddReview = () => {
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Hide the modal when it's closed
  };

  useEffect(() => {
    // const getMovieById = async () => {
    //   const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}`;
    //   const response = await fetch(url);
    //   const responseJson = await response.json();
    //   setMovie(responseJson);
    //   const videos = await getMovieVideos(movieid);
    //   const creditsUrl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${key}`;
    //   const creditsResponse = await fetch(creditsUrl);
    //   const creditsJson = await creditsResponse.json();
    //   const year = movie.release_date.split('-')[0];
    //   setMovie({
    //     ...movie,
    //     year,
    //     cast: creditsJson.cast.slice(0, 5).map(actor => actor.name) // Get first 5 actors
    //   });
    const getMovieById = async () => {
        const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}`;
        const response = await fetch(url);
        const responseJson = await response.json();
    
        const videos = await getMovieVideos(movieid);
        const creditsUrl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${key}`;
        const creditsResponse = await fetch(creditsUrl);
        const creditsJson = await creditsResponse.json();
    
        const year = responseJson.release_date ? responseJson.release_date.split('-')[0] : null;
        const director = creditsJson.crew.find(person => person.job === 'Director');
        const producer = creditsJson.crew.find(person => person.job === 'Producer');
    
    
        setMovie({
          ...responseJson,
          year,
          cast: creditsJson.cast.slice(0,10).map(actor => actor.name),
          director: director ? director.name : 'N/A', // If director is found, use their name, otherwise 'N/A'
        producer: producer ? producer.name : 'N/A',  // If producer is found, use their name, otherwise 'N/A'
        });

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
      <div className="container movie-app">
        <div className="row">
          <div className="col-md-6">
            <h1>{movie.title}</h1>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid"
            />
            <p>Year: {movie?.year}</p>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            {movie?.cast && (
              <div>
                <p>Cast:</p>
                <ul>
                  {movie.cast.map((actor, index) => (
                    <li className="movieDetails" key={index}>{actor}</li>
                  ))}
                </ul>
                <div className="row">
          <div className="col">
            <p>{movie.overview}</p>
          </div>
        </div>
              </div>
            )}
          </div>
          <div className="col-md-6">
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      className="embed-responsive-item"
      src={trailerUrl}
      title="Trailer"
      allowFullScreen
      width="500" 
      height="281" 
    />
  </div>
  <div className="mt-4">
    <button className="btn btn-primary">Add a Review</button>
  </div>
  
</div>

        </div>

      </div>
    </FadeIn>
  );
};

export default SingleMovie;





