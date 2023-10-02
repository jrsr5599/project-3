import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FadeIn from 'react-fade-in/lib/FadeIn';
import ReviewForm from '../components/ReviewForm';

const key = '15a6559706f656f8eadc5e7642675b96';
const getMovieVideos = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`;
  const response = await fetch(url);
  const responseJson = await response.json();
  return responseJson.results;
};
const SingleMovie = () => {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState(null);
  const [showReviewField, setShowReviewField] = useState(false);
  const handleAddReviewClick = () => {
    setShowReviewField(true);
  };
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setShowReviewField(false);
  };
  useEffect(() => {
    const getMovieById = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=${key}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      const videos = await getMovieVideos(movieid);
      const creditsUrl = `https://api.themoviedb.org/3/movie/${movieid}/credits?api_key=${key}`;
      const creditsResponse = await fetch(creditsUrl);
      const creditsJson = await creditsResponse.json();
      const year = responseJson.release_date
        ? responseJson.release_date.split('-')[0]
        : null;
      const director = creditsJson.crew.find(
        (person) => person.job === 'Director'
      );
      const producer = creditsJson.crew.find(
        (person) => person.job === 'Producer'
      );
      setMovie({
        ...responseJson,
        year,
        cast: creditsJson.cast.slice(0, 10).map((actor) => actor.name),
        director: director ? director.name : 'N/A',
        producer: producer ? producer.name : 'N/A',
      });
      if (videos.length > 0) {
        const videoKey = videos[0].key;
        setTrailerUrl(`https://www.youtube.com/embed/${videoKey}`);
      }
    };
    getMovieById();
  }, [movieid]);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <FadeIn delay={500} transitionDuration={800}>
      <div className="container movie-app">
        <div className="background-container">
          <div className="background-fade-in"></div>
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
                      <li className="movieDetails" key={index}>
                        {actor}
                      </li>
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
                <button
                  className="btn btn-primary"
                  onClick={handleAddReviewClick}>
                  Add a Review
                </button>
                {showReviewField && (
                  <ReviewForm onSubmit={handleReviewSubmit}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default SingleMovie;
