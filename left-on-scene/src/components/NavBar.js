import React from 'react';
import Link from 'link-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
  <span>Left on Scene</span>

         <span>
           <Link to="/">Home</Link>
         </span>
         <span>
           <Link to="/about">My Movies</Link>
         </span>
         <span>
           <Link to="/contact">My Reviews</Link>
         </span>
         <span>
           <Link to="/contact">Donations</Link>
         </span>        
         <span>
           <Link to="/Login">Log In</Link>
         </span>

</nav>
  );
}
export default NavBar;