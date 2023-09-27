const { Schema } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
  directors: [
    {
      type: String,
    },
  ],
  movieId: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: String,
    },
  ],
  image: {
    type: String,
  },
});

module.exports = movieSchema;
