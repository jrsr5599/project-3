import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewInputChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewText);
    setReviewText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reviewText">Review:</label>
        <textarea
          className="form-control"
          id="reviewText"
          rows="3"
          value={reviewText}
          onChange={handleReviewInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
