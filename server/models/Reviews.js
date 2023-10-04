const { mongoose, Schema } = require("mongoose");
const commentSchema = require("./Comments");
// INCLUDE //
// title
// text/description
// comment on review comment: [commentSchema]
// connect review to user
// save film to review to match queries

const reviewSchema = new Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  movie: {
    type: Object
  },
  reviewId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
});

module.exports = reviewSchema;
