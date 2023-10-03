import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Reviews = () =>  {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
    const fetchReviews  = async () => {
        try { 
            const response = await axios.get('/api/reivews');
            setReviews(response.data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    fetchReviews ();
}, []);

return (
    <div className="reviews-container">
      <div className="content">
        <h1 className="heading">My Reviews</h1>
        <div className="reviews-list">
          {reviews.map((review) => (
            <div key={review._id} className="review-card">
              <h2>{review.title}</h2>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;