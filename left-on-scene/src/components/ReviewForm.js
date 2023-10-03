// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_REVIEW } from '../utils/mutations';

// const ReviewForm = () => {
//   const [reviewText, setReviewText] = useState({
//     text: '',
//     user: '',   
//     movie: '',  
//     movieId: '',  
//     title: ''   
//   });

//   const handleReviewInputChange = (e) => {
//     const { name, value } = e.target;
//     setReviewText({...reviewText, [name]: value,})
//     setReviewText(e.target.value);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     if (form.checkValidity() === false) {
//       e.preventDefault();
//       e.preventPropagation();
//     }
//     try {
//       console.log("Review:", reviewText)
//       await addReview({
//         variables: { newReview: {
//           text: reviewText} },
//       });
//     } catch (err) {
//       console.error(err);
//     }   
//     setReviewText({
//       text: "",
//     });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="reviewText">Review:</label>
//         <textarea
//           className="form-control"
//           id="reviewText"
//           rows="3"
//           value={reviewText.text}
//           onChange={handleReviewInputChange}
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit Review</button>
//     </form>
//   );
// };

// export default ReviewForm;


// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_REVIEW } from '../utils/mutations';

// const ReviewForm = () => {
//   const [reviewText, setReviewText] = useState({
//     text: '',
//     movie: '',  // Make sure you have a way to identify the movie (e.g., movie ID)
//     movieId: '',  // Make sure you have a way to identify the movie (e.g., movie ID)
//     title: ''   // Make sure you have a way to identify the movie (e.g., movie title)
//   });

//   const [addReview] = useMutation(ADD_REVIEW);

//   const handleReviewInputChange = (e) => {
//     const { name, value } = e.target;
//     setReviewText({
//       ...reviewText,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addReview({
//         variables: {
//           newReview: {
//             text: reviewText.text,   // Provide a value for text
//             movie: reviewText.movie, // Provide the movie name
//             movieId: reviewText.movieId,  // Provide the movie ID
//             title: reviewText.title  // Provide a title for the review
//           }
//         },
//       });
//     } catch (err) {
//       console.error(err);
//     }   
//     setReviewText({
//       text: '',
//       user: '',
//       movie: '',
//       movieId: '',
//       title: ''
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="reviewText">Review:</label>
//         <textarea
//           className="form-control"
//           id="reviewText"
//           rows="3"
//           name="text"
//           value={reviewText.text}
//           onChange={handleReviewInputChange}
//           required  // Add this if review text is required
//         />
//       </div>
//       <button type="submit" className="btn btn-primary">Submit Review</button>
//     </form>
//   );
// };

// export default ReviewForm;


import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

const ReviewForm = ({ movieTitle, movieId }) => {
  const [reviewText, setReviewText] = useState({
    text: '',
    title: ''
  });

  const [addReview] = useMutation(ADD_REVIEW);

  const handleReviewInputChange = (e) => {
    const { name, value } = e.target;
    setReviewText({
      ...reviewText,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview({
        variables: {
          newReview: {
            text: reviewText.text,
            movie: movieTitle,
            movieId: movieId,
            title: reviewText.title
          }
        },
      });
    } catch (err) {
      console.error(err);
    }   
    setReviewText({
      text: '',
      title: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reviewText">Review:</label>
        <textarea
          className="form-control"
          id="reviewText"
          rows="3"
          name="text"
          value={reviewText.text}
          onChange={handleReviewInputChange}
          required
        />
      </div>


      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
