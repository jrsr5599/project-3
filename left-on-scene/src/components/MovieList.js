import React from "react";
import Auth from "../utils/auth";
import { useMutation, useQuery } from "@apollo/client";
import { REMOVE_MOVIE } from "../utils/mutations";
import { GET_ME } from "../utils/queries";
import FadeIn from "react-fade-in/lib/FadeIn";
import { Link } from "react-router-dom";


const MovieList = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeMovie, { error }] = useMutation(REMOVE_MOVIE);

  const userData = data?.me || {};

  const handleDeleteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeMovie({ variables: { movieId } });
      console.log("record deleted: ", response);
      if (error) {
        console.log(error);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  const containerStyle = {
	border: "1px solid #ccc",
	padding: "10px",
	margin: "10px",
	display: "inline-block",
	color: "#ffffff",
  }

  return (
    <FadeIn>
      <h1>My Movies</h1>
      <div className="container-fluid movie-app">
        <div className="row">
          <div className="col">
            <div className="saved-movies">
              {userData.savedMovies.map((movie) => {
                return (
                  <div style={containerStyle} to={`/movie/${movie.movieId}`}>
                    <div key={movie.movieId}>
						<h1>{movie.title}</h1>
                      {`https://image.tmdb.org/t/p/w500/${movie.image}` ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
                          alt={`The cover for ${movie.image}`}
                        />
                      ) : null}
                    </div>
					<Link to={`/movie/${movie.movieId}`} className="btn btn-primary">Movie Overview</Link>
					<button className="btn btn-danger" onClick={() => handleDeleteMovie(movie.movieId)}>Delete!</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default MovieList;
