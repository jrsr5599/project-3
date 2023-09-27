const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Users {
    _id: ID!
    username: String!
    email: String
    movieCount: Int
    savedMovies: [Movie]
    reviews: [Reviews]
  }

  type Auth {
    token: ID!
    user: Users
  }

  type Movie {
    movieId: String
    title: String
    description: String
    directors: [String]
    actors: [String]
    image: String
  }

  type Reviews {
    rating: Int
    movie: String
    movieId: String
    title: String
    text: String
    comments: [Comments]
  }

  type Comments {
    text: String
  }

  type Query {
    me: Users
  }

  input SaveMovie {
    movieId: String
    title: String
    description: String
    directors: [String]
    actors: [String]
    image: String
  }

  input AddReview {
    rating: Int
    movie: String
    movieId: String
    title: String
    text: String
  }

  input AddComment {
    text: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveMovie(newMovie: SaveMovie!): Users
    removeMovie(movieId: ID!): Users
    addReview(newReview: AddReview!): Users
    removeReview(reviewId: ID!): Users
    addComment(newComment: AddComment): Users
    removeComment(commentId: ID!): Users
  }
`;
module.exports = typeDefs;
