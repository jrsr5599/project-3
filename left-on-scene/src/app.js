import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
// import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieListHeading from './components/ReviewForm';
import SearchBox from './components/SearchBox';
// import RemoveFavorites from './components/RemoveFavorites';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/LeftonScene';
import Layout from './components/Layout';
import LeftonScene from './components/LeftonScene';
import SingleMovie from './components/SingleMovie';
import DonationPage from './components/Donations';
import { setContext } from '@apollo/client/link/context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// import 'dotenv/config'
// console.log (process.env.SECRET_KEY)
// const key

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LeftonScene />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Movie/:movieid" element={<SingleMovie />} />
            <Route path="/Home" element={<MovieSearch />} />
            <Route path="/Donations" element={<DonationPage />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
