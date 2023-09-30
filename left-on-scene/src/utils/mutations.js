import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_MOVIE = gql`
  mutation saveMovie($newMovie: SaveMovie) {
    saveMovie(newMovie: $newMovie) {
      _id
      username
      email
      savedMovies {
        movieId
        title
        description
        directors
        actors
        image
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($movieId: ID!) {
    removeMovie(movieId: $movieId) {
      _id
      username
      email
      savedMovies {
        movieId
        title
        description
        directors
        actors
        image
      }
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation addReview($newReview: AddReview!) {
    addReview(newReview: $newReview) {
      _id
      username
      email
      reviews {
        rating
        movie
        movieId
        title
        text
        comments
      }
    }
  }
`;

export const REMOVE_REVIEW = gql`
  mutation removeReview($reviewId: ID!) {
    removeReview(reviewId: $reviewId) {
      _id
      username
      email
      reviews {
        rating
        movie
        movieId
        title
        text
        comments
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($newComment: AddComment!) {
    addComment(newComment: $newComment) {
      _id
      username
      email
      reviews {
        comments {
          text
        }
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($commentId: ID!) {
    removeComment(commentId: $commentId) {
      _id
      username
      email
      reviews {
        comments {
          text
        }
      }
    }
  }
`;
