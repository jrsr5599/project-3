import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";

const ReviewForm = ({ newMovieData }) => {
  const [textArea, setTextArea] = useState("");
  const [newReview, setNewReview] = useState([]);

  const [addReview] = useMutation(ADD_REVIEW);

  const handleReviewInputChange = (e) => {
    const { name, value } = e.target;
    setTextArea({ ...textArea, [name]: value });
    setTextArea(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const reviewText = {
      rating:1,
      movie: newMovieData.title,
      reviewId: newMovieData.id.toString(),
      title: "",
      text: textArea,
      comment: ['']
    }



    setNewReview(reviewText)

    try {
      console.log("Review:", newReview);
      await addReview({
        variables: { newReview },
      });
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reviewText">Review:</label>
        <textarea
          className="form-control"
          id="reviewText"
          rows="3"
          value={textArea.text}
          onChange={handleReviewInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;
