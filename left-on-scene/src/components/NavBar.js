import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
// import smallLogo from './imgs/smallLogo.png';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <span>
        <Link to="/">
          <img
            className="smallLogo"
            src="/imgs/logosmall.png"
            alt="Let on Scene"
          ></img>
        </Link>
      </span>
      <span>
        <Link to="/Home">Find Movies</Link>
      </span>
      {Auth.loggedIn() ? (
        <>
          <span>
            <Link to="/MyMovies">My Movies</Link>
          </span>
          <span>
            <Link to="/MyReviews">My Reviews</Link>
          </span>
          <span>
            <Link onClick={Auth.logout}>Logout</Link>
          </span>
        </>
      ) : (
        <Link to="/login">Login/Sign up</Link>
      )}
    </nav>
  );
}
export default NavBar;
