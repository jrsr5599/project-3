import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
// import smallLogo from './imgs/smallLogo.png';


function NavBar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <ul>
    //     <li>
    //       <a href="/">Home</a>
    //     </li>
    //     <li>
    //       <a href="/about">My Movies</a>
    //     </li>
    //     <li>
    //       <a href="/contact">My Reviews</a>
    //     </li>
    //     <li>
    //       <a href="/contact">Donations</a>
    //     </li>        <li>
    //       <a href="/contact">Donations</a>
    //     </li>
    //   </ul>
    // </nav>
<nav className="navbar navbar-light bg-dark">
    <span> <Link to="/"><img
        className="smallLogo"
        src= '/imgs/logosmall.png'
        alt="Let on Scene"></img>
      </Link></span>
         <span>
           <Link to="/Home">Find Movies</Link>
         </span>
         <span>
           <Link to="/MyMovies">My Movies</Link>
         </span>
         <span>
           <Link to="/MyReviews">My Reviews</Link>
         </span>
         {/* <span>
           <Link to="/donations">Donations</Link>
         </span>         */}
         <span>
           {Auth.loggedIn() ? (
            <>
            <Link onClick={Auth.logout}>Logout</Link>
            </>
           ) : (
            <Link to="/login">Login/Sign up</Link>
           )}
         </span>
         

</nav>

  );
}
export default NavBar;