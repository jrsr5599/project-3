import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';

import FadeIn from "react-fade-in";


const LeftonScene = () => {
  return (
    <div>   <FadeIn transitionDuration={10000}>
      <img
        className="logo"
        src= './imgs/LOGOtransparent.png'
        alt="Let on Scene"
      />    </FadeIn>


<FadeIn transitionDuration={20000} delay={75}> <p className='hometext'>
      Left on Scene is a user-friendly platform designed for movie enthusiasts. <br/>
      Discover and explore an extensive database of films across various genres.<br/> 
      Users can search for their favorite movies, read insightful reviews, and contribute their own critiques.
      </p></FadeIn>
    </div>
  );
};

export default LeftonScene;
