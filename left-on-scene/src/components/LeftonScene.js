import React, { useState } from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}
		</>
	);
};


// Lines 17-19 are from Reach mini project. Keeping just in case
// function LeftonScene(){ 
//    return <LeftonScene/>
// }
export default LeftonScene;
