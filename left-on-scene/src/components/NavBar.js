import React from 'react';
import { Link } from 'react-router-dom';
import Login from './login';


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
  <span> <Link to="/">Left On Scene</Link></span>

         <span>
           <Link to="/Home">Home</Link>
         </span>
         <span>
           <Link to="/MyMovies">My Movies</Link>
         </span>
         <span>
           <Link to="/MyReviews">My Reviews</Link>
         </span>
         <span>
           <Link to="/donations">Donations</Link>
         </span>        
         <span>
           <Link to="/login">Log In</Link>
         </span>

</nav>
  );
}
export default NavBar;