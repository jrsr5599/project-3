import React from 'react';
import {Navbar} from react-bootstrap;

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
<nav className="navbar navbar-light bg-light"> 
  <a className="navbar-brand" href="#">Left on Scene</a>

         <span>
           <a href="/">Home</a>
         </span>
         <span>
           <a href="/about">My Movies</a>
         </span>
         <span>
           <a href="/contact">My Reviews</a>
         </span>
         <span>
           <a href="/contact">Donations</a>
         </span>        <span>
           <a href="/contact">Log In</a>
         </span>

</nav>
  );
}
export default NavBar;