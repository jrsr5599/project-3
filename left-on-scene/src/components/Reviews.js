// import React, { useState, useEffect } from 'react';
// import { GET_ME } from '../utils/queries'
// import { useMutation, useQuery } from '@apollo/client';
// import { REMOVE_REVIEW } from '../utils/mutations';

// const Reviews = () => {
//     const { loading , data } = useQuery(GET_ME)
//     const [removeReview, {error}] = userMutation(REMOVE_REVIEW)
    
//     const fetchReviews = async () => {
//     try {
     
//         setReviews(response.data);
//         } catch (error) {
//           console.error('Error fetching reviews:', error);
//         }
//       };
  
//       fetchReviews();
//     }, []);
  
//     return (
//       <div>
//         <h1>My Reviews</h1>
//         <div>
//           {reviews.map(review => (
//             <div key={review._id}>
//               <h2>{review.title}</h2>
//               <p>{review.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

// export default Reviews;

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_REVIEW } from '../utils/mutations';


const Reviews = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW);
  const userData = data?.me || {};

  if (loading) return <div>Loading...</div>;

  const { reviews } = data.me; // Assuming that reviews are accessible through data.me

  const handleRemoveReview = async (reviewId) => {
    try {
      await removeReview({
        variables: { reviewId },
        refetchQueries: [{ query: GET_ME }],
        if (error) {console.log(error)} 
        
      });
    } catch (error) {
      console.error('Error removing review:', error);
    }
  };
  console.log('Data from server:', data);

  return (
    <div className='movie-app'>
      <h1>My Reviews</h1>
      <div>
        {reviews.map((review) => (
          <div key={review._id}>
            <h2>{review.title}</h2>
            <p>{review.text}</p>
            <button onClick={() => handleRemoveReview(review._id)}
            className="btn btn-danger"
            >
              Remove Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
