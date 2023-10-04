
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_REVIEW } from "../utils/mutations";
import Auth from "../utils/auth";
import FadeIn from "react-fade-in/lib/FadeIn";


const Reviews = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW);

  const userData = data?.me || {};

  const handleRemoveReview = async (reviewId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;


    if (!token) {
      return false;
    }

    try {
      const response = await removeReview({
        variables: { reviewId },


      });
      console.log("Review deleted: ", response);

      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.error("Error removing review:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log("Data from server:", userData.reviews);

  return (
    <FadeIn>
      <div className="movie-app">
        <h1>My Reviews</h1>
        <div>
          {userData.reviews.map((review) => (
            <div key={review.reviewId}>
              <h2>{review.movie}</h2>
              <p>{review.text}</p>
              <button
                onClick={() => handleRemoveReview(review.reviewId)}
                className="btn btn-danger"
              >
                Remove Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Reviews;
