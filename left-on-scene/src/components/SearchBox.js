import React, { useState } from 'react';

const SearchBox = ({ setSearchValue, getMovieRequest }) => {
	const [searchQuery, setSearchQuery] = useState('');
  
	const handleSearch = () => {
	  setSearchValue(searchQuery);
	  getMovieRequest(searchQuery);
	};
  
	return (
	  <div className="col col-sm-4">
		<input
		  className='form-control'
		  type="text"
		  value={searchQuery}
		  onChange={(e) => setSearchQuery(e.target.value)}
		  placeholder="Search for a movie..."
		/>
		<button type='button' className='btn btn-primary' onClick={handleSearch}>Search</button>
	  </div>
	);
  };
  
  export default SearchBox;