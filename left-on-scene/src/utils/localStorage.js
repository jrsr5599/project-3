export const getSavedMovieIds = () => {
    // checks for anything in the local storage
  const savedMovieIds = localStorage.getItem("saved_movies")
    ? JSON.parse(localStorage.getItem("saved_movies"))
    : [];

  return savedMovieIds;
};

export const saveMovieIds = (movieIdArr) => {
  if (movieIdArr.length) {
    localStorage.setItem("saved_movies", JSON.stringify(movieIdArr));
  } else {
    localStorage.removeItem("saved_movies");
  }
};

export const removeMovieId = (movieId) => {
    const savedMovieIds = localStorage.getItem('saved_movies')
    ? JSON.parse(localStorage.getItem('saved_movies'))
    : null

    // checks to see if local storage is empty
    if (!savedMovieIds) {
        return false;
    }

    const updatedsavedMovieIds = savedMovieIds?.filter((savedMovieId) => savedMovieId !== movieId);
    localStorage.setItem('saved_movies', JSON.stringify(updatedsavedMovieIds))

    return true
}