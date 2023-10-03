import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState({text: '', user: '', movie: '', movieId: '', title: ''});
  const [addReview] = useMutation(ADD_REVIEW

  );
  const handleReviewInputChange = (e) => {
    const { name, value } = e.target;
    setReviewText({...reviewText, [name]: value,})
    setReviewText(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.preventPropagation();
    }
    try {
      console.log("Review:", reviewText)
      await addReview({
        variables: { newReview: {
          text: reviewText} },
      });
    } catch (err) {
      console.error(err);
    }   
    setReviewText({
      text: "",
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
          value={reviewText.text}
          onChange={handleReviewInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
